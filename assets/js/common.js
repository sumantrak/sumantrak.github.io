$(document).ready(function () {
  const root = document.documentElement;
  const buildDensityPath = (mean, sigma, amplitude, baseline, left, right) => {
    const steps = 72;
    let line = "";
    let fill = `M ${left} ${baseline}`;

    for (let i = 0; i <= steps; i++) {
      const x = left + ((right - left) * i) / steps;
      const z = (x - mean) / sigma;
      const y = baseline - amplitude * Math.exp(-0.5 * z * z);
      line += `${i === 0 ? "M" : " L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
      fill += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }

    fill += ` L ${right} ${baseline} Z`;
    return { line, fill };
  };

  const updateBeliefPlot = () => {
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(window.scrollY / maxScroll, 1);
    const eased = 1 - Math.pow(1 - progress, 2.2);
    document.querySelectorAll(".belief-plot").forEach((plot) => {
      const isNav = plot.classList.contains("belief-plot-nav");
      const left = isNav ? 10 : 24;
      const right = isNav ? 310 : 496;
      const baseline = isNav ? 56 : 138;
      let targetMode = isNav ? 160 : 268;
      if (isNav) {
        const activeLink = document.querySelector(".nav-center-list .nav-item.active .nav-link");
        const beliefShell = document.querySelector(".nav-belief-shell");
        if (activeLink && beliefShell) {
          const linkRect = activeLink.getBoundingClientRect();
          const shellRect = beliefShell.getBoundingClientRect();
          const centerRatio = Math.min(Math.max((linkRect.left + linkRect.width / 2 - shellRect.left) / shellRect.width, 0), 1);
          targetMode = left + centerRatio * (right - left);
        }
      }

      const priorMean = (isNav ? targetMode - 54 : 190) + eased * (isNav ? 54 : 78);
      const priorSigma = (isNav ? 34 : 82) - eased * (isNav ? 14 : 34);
      const priorAmplitude = (isNav ? 14 : 34) + eased * (isNav ? 6 : 16);

      const posteriorMean = isNav ? targetMode + (1 - eased) * 38 : 338 - eased * 70;
      const posteriorSigma = (isNav ? 12 : 26) + (1 - eased) * (isNav ? 18 : 44);
      const posteriorAmplitude = (isNav ? 28 : 70) - (1 - eased) * (isNav ? 10 : 30);

      const prior = buildDensityPath(priorMean, priorSigma, priorAmplitude, baseline, left, right);
      const posterior = buildDensityPath(posteriorMean, posteriorSigma, posteriorAmplitude, baseline, left, right);

      plot.querySelector(".belief-curve-prior")?.setAttribute("d", prior.line);
      plot.querySelector(".belief-fill-prior")?.setAttribute("d", prior.fill);
      plot.querySelector(".belief-curve-posterior")?.setAttribute("d", posterior.line);
      plot.querySelector(".belief-fill-posterior")?.setAttribute("d", posterior.fill);

      const priorY = baseline - priorAmplitude;
      const posteriorY = baseline - posteriorAmplitude;

      const priorMarker = plot.querySelector(".belief-marker-prior");
      const posteriorMarker = plot.querySelector(".belief-marker-posterior");

      priorMarker?.setAttribute("cx", priorMean.toFixed(2));
      priorMarker?.setAttribute("cy", priorY.toFixed(2));
      priorMarker?.setAttribute("opacity", (0.95 - eased * 0.35).toFixed(2));

      posteriorMarker?.setAttribute("cx", posteriorMean.toFixed(2));
      posteriorMarker?.setAttribute("cy", posteriorY.toFixed(2));
      posteriorMarker?.setAttribute("opacity", (0.25 + eased * 0.7).toFixed(2));

      plot.querySelector(".belief-fill-prior")?.setAttribute("opacity", (0.9 - eased * 0.4).toFixed(2));
      plot.querySelector(".belief-curve-prior")?.setAttribute("opacity", (0.95 - eased * 0.32).toFixed(2));
      plot.querySelector(".belief-fill-posterior")?.setAttribute("opacity", (0.18 + eased * 0.72).toFixed(2));
      plot.querySelector(".belief-curve-posterior")?.setAttribute("opacity", (0.3 + eased * 0.7).toFixed(2));
    });
  };

  const updateBackgroundOffset = () => {
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const scrollRatio = Math.min(window.scrollY / maxScroll, 1);
    root.style.setProperty("--scroll-ratio", scrollRatio.toFixed(4));
    root.style.setProperty("--scroll-shift", `${window.scrollY * 0.22}px`);
    root.style.setProperty("--scroll-shift-soft", `${window.scrollY * 0.11}px`);
    root.style.setProperty("--scroll-shift-reverse", `${window.scrollY * -0.16}px`);
    updateBeliefPlot();
  };

  updateBackgroundOffset();
  window.addEventListener("scroll", updateBackgroundOffset, { passive: true });

  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
