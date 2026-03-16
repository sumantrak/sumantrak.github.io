---
layout: page
permalink: /research/
title: research
description: Questions, themes, and representative work.
nav: true
nav_order: 2
---
<div class="research-intro">
  <p>
    My research is mainly about sequential decision-making under uncertainty. At present, I focus primarily on
    multi-armed bandits, uncertainty quantification, and sample-efficient learning. I am also interested in causal
    methods for efficient decision-making, and I have previously worked on spatio-temporal event modeling.
  </p>
</div>

<a class="anchor" id="bandits-uq"></a>
## Multi-Armed Bandits and Uncertainty Quantification

<p class="question-prompt">Question</p>
How should a learner quantify uncertainty well enough to explore efficiently?

I am interested in bandit settings where the quality of uncertainty estimates directly affects the quality of exploration.
This includes questions about how to construct priors, how to share information across related tasks, and how structural
assumptions can reduce the amount of data needed for learning.

**Related projects**
- [Multi-Task Bandits and Shared Priors]({{ '/projects/multi-task-bandits/' | relative_url }})
- [Priors from Language Models]({{ '/projects/llm-priors/' | relative_url }})

**Related publications**
- Co-Exploration and Co-Exploitation via Shared Structure in Multi-Task Bandits
- Had enough of experts? Elicitation and evaluation of Bayesian priors from large language models

<a class="anchor" id="causal-learning"></a>
## Causal Inference for Efficient Learning

<p class="question-prompt">Question</p>
When does causal information actually change what can be learned from limited feedback?

I work on questions at the intersection of causal inference and decision-making, especially in settings where
interventions, confounding, or uncertainty about graph structure affect learning. I am interested in when causal
information genuinely improves what can be learned, either by reducing sample complexity, improving identifiability,
or supporting better downstream decisions.

**Related projects**
- [Causal Decision-Making and Bayesian Optimization]({{ '/projects/causal-decision-making/' | relative_url }})
- [CLAM and Local Effect Estimation]({{ '/projects/clam/' | relative_url }})

**Related publications**
- Graph Agnostic Causal Bayesian Optimisation
- CLAM: Causal Spatial Disaggregation to Infer Local Effects From Coarse Data

<a class="anchor" id="event-modeling"></a>
## Spatio-Temporal Event Modeling

<p class="question-prompt">Question</p>
How do we build event models that are expressive enough for real data and still interpretable enough to trust?

This is an earlier line of work of mine, focused on point processes and related models for events evolving over time and
space. I have been particularly interested in interpretable model structure, benchmark design, counterfactual event
generation, and applications where the model needs to be understandable as well as predictive.

**Related projects**
- [Interpretable Spatio-Temporal Point Processes]({{ '/projects/point-processes/' | relative_url }})

**Related publications**
- Neural Spatio Temporal Point Processes: Trends and Challenges
- HawkesNest: A Multi-Axis Benchmark for Spatio-Temporal Pattern Complexity
- SQUID: A Bayesian Approach for Physics-Informed Event Modeling
- Peculiarities of Counterfactual Point Process Generation

## Adjacent Interests

I also have an ongoing interest in fairness-aware learning and human-in-the-loop machine learning, especially where these
questions interact with uncertainty quantification or decision support. Earlier work in this direction includes
**Flexible Group Fairness Metrics for Survival Analysis** and engineering work during **Julia Summer of Code** on
fairness algorithms for the MLJ ecosystem.
