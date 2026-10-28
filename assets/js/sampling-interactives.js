(() => {
  const palette = () => {
    const css = getComputedStyle(document.documentElement);
    return {
      accent: css.getPropertyValue('--global-theme-color').trim() || '#a94735',
      ink: css.getPropertyValue('--global-text-color').trim() || '#22211f',
      muted: css.getPropertyValue('--global-text-color-light').trim() || '#6b665e',
      divider: css.getPropertyValue('--global-divider-color').trim() || '#d5cfc3',
      background: css.getPropertyValue('--global-bg-color').trim() || '#f5f1e9',
    };
  };

  const redrawers = [];

  const logGamma = (value) => {
    const coefficients = [
      676.5203681218851,
      -1259.1392167224028,
      771.3234287776531,
      -176.6150291621406,
      12.507343278686905,
      -0.13857109526572012,
      9.9843695780195716e-6,
      1.5056327351493116e-7,
    ];

    if (value < 0.5) {
      return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * value)) - logGamma(1 - value);
    }

    const shifted = value - 1;
    let series = 0.9999999999998099;
    coefficients.forEach((coefficient, index) => {
      series += coefficient / (shifted + index + 1);
    });
    const base = shifted + coefficients.length - 0.5;
    return 0.5 * Math.log(2 * Math.PI) + (shifted + 0.5) * Math.log(base) - base + Math.log(series);
  };

  const betaDensity = (x, alpha, beta) => {
    const safeX = Math.min(1 - 1e-9, Math.max(1e-9, x));
    const logBeta = logGamma(alpha) + logGamma(beta) - logGamma(alpha + beta);
    return Math.exp((alpha - 1) * Math.log(safeX) + (beta - 1) * Math.log(1 - safeX) - logBeta);
  };

  const canvasContext = (canvas) => {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(280, Math.round(bounds.width));
    const height = Math.max(160, Math.round(bounds.height));
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    const context = canvas.getContext('2d');
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    return { context, width, height };
  };

  const plotFrame = (context, width, height, maximum, colors) => {
    const padding = { top: 16, right: 16, bottom: 26, left: 30 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    context.strokeStyle = colors.divider;
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(padding.left, padding.top);
    context.lineTo(padding.left, padding.top + plotHeight);
    context.lineTo(padding.left + plotWidth, padding.top + plotHeight);
    context.stroke();
    context.fillStyle = colors.muted;
    context.font = '10px Manrope, sans-serif';
    context.fillText('0', padding.left - 3, height - 9);
    context.fillText('1', width - padding.right - 3, height - 9);
    if (maximum) context.fillText(maximum.toFixed(2), 2, padding.top + 4);
    return { padding, plotWidth, plotHeight };
  };

  const drawCurve = (context, frame, fn, maxValue, style, lineWidth = 2) => {
    context.beginPath();
    for (let index = 0; index <= 180; index += 1) {
      const x = index / 180;
      const y = fn(x);
      const canvasX = frame.padding.left + x * frame.plotWidth;
      const canvasY = frame.padding.top + frame.plotHeight - (y / maxValue) * frame.plotHeight;
      if (index === 0) context.moveTo(canvasX, canvasY);
      else context.lineTo(canvasX, canvasY);
    }
    context.strokeStyle = style;
    context.lineWidth = lineWidth;
    context.stroke();
  };

  const drawLegend = (context, frame, items) => {
    context.font = '10px Manrope, sans-serif';
    let x = frame.padding.left + 6;
    const y = frame.padding.top + 12;
    items.forEach(({ label, color, dashed, dot }) => {
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = 2;
      context.setLineDash(dashed ? [4, 3] : []);
      if (dot) {
        context.beginPath();
        context.arc(x + 3, y - 3, 2.2, 0, Math.PI * 2);
        context.fill();
      } else {
        context.beginPath();
        context.moveTo(x, y - 3);
        context.lineTo(x + 9, y - 3);
        context.stroke();
      }
      context.setLineDash([]);
      context.fillText(label, x + 13, y);
      x += context.measureText(label).width + 28;
    });
  };

  const value = (root, selector) => Number(root.querySelector(selector).value);
  const show = (root, selector, text) => {
    root.querySelector(selector).textContent = text;
  };

  const initialiseBayes = (root) => {
    const canvas = root.querySelector('[data-bayes-canvas]');
    const redraw = () => {
      const colors = palette();
      const alpha = value(root, '[data-bayes-alpha]');
      const beta = value(root, '[data-bayes-beta]');
      const heads = value(root, '[data-bayes-heads]');
      const tails = value(root, '[data-bayes-tails]');
      show(root, '[data-bayes-heads-output]', heads);
      show(root, '[data-bayes-tails-output]', tails);

      const posteriorAlpha = alpha + heads;
      const posteriorBeta = beta + tails;
      const samples = Array.from({ length: 181 }, (_, index) => index / 180);
      const maximum = Math.max(
        ...samples.map((x) => betaDensity(x, alpha, beta)),
        ...samples.map((x) => betaDensity(x, posteriorAlpha, posteriorBeta))
      ) * 1.1;
      const { context, width, height } = canvasContext(canvas);
      const frame = plotFrame(context, width, height, maximum, colors);
      context.setLineDash([5, 4]);
      drawCurve(context, frame, (x) => betaDensity(x, alpha, beta), maximum, colors.muted, 1.5);
      context.setLineDash([]);
      drawCurve(context, frame, (x) => betaDensity(x, posteriorAlpha, posteriorBeta), maximum, colors.accent, 2.4);
      drawLegend(context, frame, [
        { label: 'prior', color: colors.muted, dashed: true },
        { label: 'posterior', color: colors.accent },
      ]);
      const mean = posteriorAlpha / (posteriorAlpha + posteriorBeta);
      root.querySelector('[data-bayes-result]').innerHTML = `<strong>Read the plot:</strong> dotted grey is your prior; rust is the posterior after ${heads} observed head${heads === 1 ? '' : 's'} and ${tails} tail${tails === 1 ? '' : 's'}. Posterior mean: <strong>${mean.toFixed(3)}</strong>.`;
    };
    const pairControls = [
      ['[data-bayes-alpha]', '[data-bayes-alpha-number]'],
      ['[data-bayes-beta]', '[data-bayes-beta-number]'],
    ];
    pairControls.forEach(([rangeSelector, numberSelector]) => {
      const range = root.querySelector(rangeSelector);
      const number = root.querySelector(numberSelector);
      range.addEventListener('input', () => {
        number.value = range.value;
        redraw();
      });
      number.addEventListener('change', () => {
        const next = Math.max(Number(range.min), Math.min(Number(range.max), Number(number.value) || Number(range.min)));
        range.value = next;
        number.value = next;
        redraw();
      });
    });
    root.querySelector('[data-bayes-heads]').addEventListener('input', redraw);
    root.querySelector('[data-bayes-tails]').addEventListener('input', redraw);
    new ResizeObserver(redraw).observe(canvas);
    redrawers.push(redraw);
    redraw();
  };

  const initialiseMonteCarlo = (root) => {
    const canvas = root.querySelector('[data-mc-canvas]');
    let samples = [];
    const functions = {
      sine: {
        label: 'gentle wave',
        fn: (x) => 0.35 + Math.sin(Math.PI * x),
      },
      quadratic: {
        label: 'quadratic',
        fn: (x) => 0.2 + x * x,
      },
      bump: {
        label: 'Gaussian bump',
        fn: (x) => 1.1 * Math.exp(-18 * (x - 0.55) ** 2),
      },
    };
    const referenceIntegral = (fn) => {
      const slices = 4000;
      let sum = fn(0) + fn(1);
      for (let index = 1; index < slices; index += 1) {
        sum += (index % 2 === 0 ? 2 : 4) * fn(index / slices);
      }
      return sum / (3 * slices);
    };
    const redraw = (resample = false) => {
      const colors = palette();
      const kind = root.querySelector('[data-mc-function]').value;
      const fn = functions[kind].fn;
      const count = value(root, '[data-mc-count]');
      show(root, '[data-mc-count-output]', count);
      if (resample || samples.length !== count || samples.kind !== kind) {
        samples = Array.from({ length: count }, () => Math.random());
        samples.kind = kind;
      }
      const estimate = samples.reduce((sum, x) => sum + fn(x), 0) / count;
      const reference = referenceIntegral(fn);
      const maxValue = Math.max(...Array.from({ length: 181 }, (_, index) => fn(index / 180))) * 1.12;
      const { context, width, height } = canvasContext(canvas);
      const frame = plotFrame(context, width, height, maxValue, colors);
      context.fillStyle = `${colors.accent}55`;
      samples.forEach((x) => {
        const y = fn(x);
        const canvasX = frame.padding.left + x * frame.plotWidth;
        const canvasY = frame.padding.top + frame.plotHeight - (y / maxValue) * frame.plotHeight;
        context.beginPath();
        context.arc(canvasX, canvasY, 1.7, 0, Math.PI * 2);
        context.fill();
      });
      drawCurve(context, frame, fn, maxValue, colors.ink, 2);
      drawLegend(context, frame, [
        { label: 'function', color: colors.ink },
        { label: 'random point', color: colors.accent, dot: true },
      ]);
      root.querySelector('[data-mc-result]').innerHTML = `<strong>Read the plot:</strong> the solid line is the function; each rust dot is one random position evaluated on it. Estimate: <strong>${estimate.toFixed(4)}</strong>; reference area: ${reference.toFixed(4)}.`;
    };
    root.querySelector('[data-mc-function]').addEventListener('change', () => redraw(true));
    root.querySelector('[data-mc-count]').addEventListener('input', () => redraw(true));
    root.querySelector('[data-mc-resample]').addEventListener('click', () => redraw(true));
    new ResizeObserver(() => redraw()).observe(canvas);
    redrawers.push(() => redraw());
    redraw(true);
  };

  const initialiseRejection = (root) => {
    const canvas = root.querySelector('[data-rs-canvas]');
    let candidates = [];
    const redraw = (resample = false) => {
      const colors = palette();
      const alpha = value(root, '[data-rs-alpha]');
      const beta = value(root, '[data-rs-beta]');
      const count = value(root, '[data-rs-count]');
      show(root, '[data-rs-alpha-output]', alpha);
      show(root, '[data-rs-beta-output]', beta);
      show(root, '[data-rs-count-output]', count);
      const target = (x) => x ** (alpha - 1) * (1 - x) ** (beta - 1);
      const maximum = Math.max(...Array.from({ length: 1001 }, (_, index) => target(index / 1000))) * 1.05;
      if (resample || candidates.length !== count || candidates.alpha !== alpha || candidates.beta !== beta) {
        candidates = Array.from({ length: count }, () => {
          const x = Math.random();
          const y = Math.random() * maximum;
          return { x, y, accepted: y <= target(x) };
        });
        candidates.alpha = alpha;
        candidates.beta = beta;
      }
      const { context, width, height } = canvasContext(canvas);
      const frame = plotFrame(context, width, height, maximum, colors);
      context.fillStyle = `${colors.muted}66`;
      candidates.filter((point) => !point.accepted).forEach((point) => {
        context.beginPath();
        context.arc(frame.padding.left + point.x * frame.plotWidth, frame.padding.top + frame.plotHeight - (point.y / maximum) * frame.plotHeight, 2, 0, Math.PI * 2);
        context.fill();
      });
      context.fillStyle = colors.accent;
      candidates.filter((point) => point.accepted).forEach((point) => {
        context.beginPath();
        context.arc(frame.padding.left + point.x * frame.plotWidth, frame.padding.top + frame.plotHeight - (point.y / maximum) * frame.plotHeight, 2.2, 0, Math.PI * 2);
        context.fill();
      });
      drawCurve(context, frame, target, maximum, colors.ink, 2.2);
      drawLegend(context, frame, [
        { label: 'target', color: colors.ink },
        { label: 'keep', color: colors.accent, dot: true },
        { label: 'reject', color: colors.muted, dot: true },
      ]);
      const accepted = candidates.filter((point) => point.accepted).length;
      root.querySelector('[data-rs-result]').innerHTML = `<strong>Read the plot:</strong> the solid curve is the target; rust candidates are kept and grey candidates are rejected. <strong>${accepted}</strong> of ${count} candidates accepted (${((accepted / count) * 100).toFixed(1)}%).`;
    };
    root.querySelectorAll('input').forEach((input) => input.addEventListener('input', () => redraw(true)));
    root.querySelector('[data-rs-resample]').addEventListener('click', () => redraw(true));
    new ResizeObserver(() => redraw()).observe(canvas);
    redrawers.push(() => redraw());
    redraw(true);
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-sampling-demo="bayes"]').forEach(initialiseBayes);
    document.querySelectorAll('[data-sampling-demo="monte-carlo"]').forEach(initialiseMonteCarlo);
    document.querySelectorAll('[data-sampling-demo="rejection"]').forEach(initialiseRejection);
    new MutationObserver(() => redrawers.forEach((redraw) => redraw())).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-theme-setting'],
    });
  });
})();
