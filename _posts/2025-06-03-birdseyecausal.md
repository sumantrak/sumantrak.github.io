---
layout: distill
title: "A Bird’s-Eye View of Causal Inference Frameworks"
permalink: /blog/2025/birds-eye-view-causal-inference-frameworks/
description: A structured overview of major causal inference paradigms, their assumptions, techniques, and practical applicability.
tags: [causal-inference, statistics, distill, machine-learning]
giscus_comments: true
date: 2025-06-03
featured: true

mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: false
chart:
  chartjs: true
  echarts: false
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Sumantrak Mukherjee
    url: "https://sumantrak.github.io"
    affiliations:
      name: DFKI

bibliography: causal-inference.bib

toc:
  - name: Overview
  - name: Major Frameworks
  - name: Key Differences
    subsections:
      - name: Assumptions
      - name: Interventions & Counterfactuals
      - name: Modeling Techniques
  - name: Use Case Guide
  - name: Modern Approaches
  - name: Limitations
  - name: References
---

> A unified map of the leading frameworks in causal inference: their philosophical roots, assumptions, tools, and the practical problems they best address.

---

## 🧭 Overview

Causal inference is about answering the question: _“What will happen if we do X?”_—not just _“What is correlated with X?”_ This post presents a high-level view of the major causal inference frameworks, highlighting their assumptions, modeling techniques, and when to use them.

---

## 🧱 Major Frameworks

| Framework | Key Thinker | Tools | Assumptions | Modeling | Use Case |
|-----------|-------------|-------|-------------|----------|----------|
| **SCM (Do-Calculus)** | Pearl | DAGs, Do-calculus | No unmeasured confounding (or model it) | Graphs, functional relationships | When causal structure is known or learnable |
| **Potential Outcomes (PO)** | Rubin | ATE, ATT, RCTs | Ignorability, SUTVA | Matching, weighting, randomization | Experimental or quasi-experimental settings |
| **Instrumental Variables (IV)** | Angrist, Imbens | 2SLS, LATE | Exclusion, monotonicity | Econometric 2-stage regressions | Natural experiments |
| **RDD** | Campbell | Local regression | Sharp/fuzzy assignment threshold | Discontinuity-based estimation | Policies or cutoffs |
| **DiD** | Econometricians | Panel regressions | Parallel trends | Time-series + control groups | Policy evaluation |
| **Bayesian Causal Nets** | Spirtes, Glymour | Probabilistic DAGs | Markov, faithfulness | Learning from conditional independence | Causal discovery |
| **Counterfactual SEMs** | Pearl | Functional equations + counterfactuals | Model-based counterfactuals | Simulation + SCM | Transportability, policy modeling |

---

## 🧠 Key Differences

### 🔍 Assumptions

- **SCM**: Assumes accurate knowledge of the causal DAG.
- **PO**: Relies on ignorability and SUTVA.
- **IV**: Requires a valid instrument that affects outcome only via treatment.
- **RDD**: Requires treatment to hinge on a known threshold.
- **DiD**: Assumes treated and untreated would follow same trend absent treatment.

---

### 🧪 Interventions & Counterfactuals

- **SCM**: Explicit `do(X)` notation for interventions.
- **PO**: Defines counterfactuals \( Y(1), Y(0) \), even if not observable.
- **IV/RDD/DiD**: Implicitly model the counterfactual world via design or structure.

---

### ⚙️ Modeling Techniques

- **SCM**: DAGs, do-calculus, backdoor/frontdoor rules.
- **PO**: Propensity score matching, inverse probability weighting, stratification.
- **IV**: Two-stage least squares (2SLS), Wald estimators.
- **RDD**: Local polynomial regression near threshold.
- **DiD**: Fixed effects panel regression on treatment timing.

---

## 🔧 Use Case Guide

| Scenario | Recommended Framework |
|----------|------------------------|
| Randomized control trials (RCTs) | Potential Outcomes |
| Observational study, rich covariates | SCM or PO |
| Valid instrument available | IV |
| Treatment by score threshold | RDD |
| Policy change across groups and time | DiD |
| Need to simulate interventions/counterfactuals | SCM or SEM |

---

## 🌱 Modern & Hybrid Approaches

### 🌳 ML + Causality

- **Causal Forests**: Estimate individual treatment effects.
- **Double Machine Learning (DML)**: Correct bias using ML for nuisance terms.
- **Neural Causal Models**: Learn DAGs or simulate counterfactuals.
- **Automated Discovery**: NOTEARS, GES, FCI algorithms for causal structure.

---

## ⚠️ Limitations

- **SCM**: Mis-specified DAG leads to incorrect conclusions.
- **PO**: Counterfactuals are untestable without strong assumptions.
- **IV**: Instruments often violate exclusion or monotonicity.
- **RDD/DiD**: Assumptions like parallel trends are often untestable.

Causal inference is **powerful**, but assumptions must be **contextually justified** and ideally **sensitivity-tested**.

---

## 📚 References

::: bib
- Pearl, Judea. *Causality: Models, Reasoning and Inference*. Cambridge University Press, 2009.
- Imbens, Guido W., and Donald B. Rubin. *Causal Inference for Statistics, Social, and Biomedical Sciences*. Cambridge, 2015.
- Hernán, Miguel A., and James M. Robins. *Causal Inference: What If*. CRC Press, 2020.
- Peters, Jonas, et al. *Elements of Causal Inference*. MIT Press, 2017.
:::

---

Thanks for reading. You can reach out [here](mailto:mukherjee.sumantrak@gmail.com) or explore more posts on [causal inference]({{ '/blog/tag/causal-inference/' | relative_url }}).
