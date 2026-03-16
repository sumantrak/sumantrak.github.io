---
layout: page
title: Causal Decision-Making and Bayesian Optimization
permalink: /projects/causal-decision-making/
description: Using causal structure when interventions are expensive and graph knowledge is incomplete.
img: assets/img/sum-prof.jpeg
importance: 2
category: causality
related_publications: true
giscus_comments: false
---
## Summary

This line of work asks how causal assumptions can make sequential optimization and bandit-style exploration more efficient.

## Research Question

How should decision-making algorithms use causal graphs, partial graph knowledge, or causal discovery when the goal is to
optimize interventions rather than only estimate effects?

## Methodology

- Causal bandits and causal Bayesian optimization
- Differential Bayesian structure learning
- Optimization under uncertain or graph-agnostic causal structure

## Key Contributions

- Explores how causal knowledge changes experimental efficiency
- Connects discovery and decision-making instead of treating them as separate stages
- Pushes beyond settings that assume the causal graph is fully known in advance

## Outputs

- Publication: {% cite mukherjee2024gacbo %}
- Related earlier thesis work on scalable causal bandits with adequate causal discovery
