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
    My research is mainly concerned with sequential decision-making under uncertainty. At present, I focus primarily on
    multi-armed bandits, uncertainty quantification, and sample-efficient learning. I am also interested in causal
    methods for efficient decision-making, and I have previously worked on spatio-temporal event modeling.
  </p>
</div>

<a class="anchor" id="bandits-uq"></a>
## Multi-Armed Bandits and Uncertainty Quantification

<p class="question-prompt">Question</p>
How should a learner quantify uncertainty well enough to explore efficiently?

### Motivation

I am interested in bandit settings where the quality of uncertainty estimates directly affects the quality of exploration.
This includes questions about how to construct priors, how to share information across related tasks, and how structural
assumptions can reduce the amount of data needed for learning.

The analysis of multi-armed bandits is typically carried out in asymptotic, or effectively infinite-horizon, settings.
Algorithms are often evaluated in terms of their convergence to the best arm.

My interest, however, is in short-horizon decision problems, concretely in N-of-1 trials.

In these settings, prior knowledge, warm-start priors, collaborative exploration, and problem structure can have a much
larger effect on performance. I am therefore interested in how information can be shared across instances and how
structure can guide exploration.

### Current directions

My work in this area can be grouped into two main directions. The first is the incorporation of prior knowledge, from
historical data or experts, into decision-making algorithms. I mainly study this as a warm-start problem, often in
Bayesian settings, where the central issue is how to construct more informative priors.

The second direction concerns cold-start scenarios. Here I am interested in designing algorithms that either exploit
known structure, for example hierarchical or causal structure, or discover useful structure online in order to reduce
the amount of exploration required.

I am particularly interested in multi-task settings, where several users interact with the same set of options. In this
context, I study how exploration can be carried out in parallel through information exchange across users, how
similarity between users can be discovered online, and how to ensure that no user is over-exploited.

### Illustrative examples

- In a short-horizon N-of-1 trial, a poor uncertainty estimate can spend a substantial fraction of the available budget
  on uninformative actions. In that setting, a warm-start prior can matter much more than it would in a long-horizon
  asymptotic analysis.
- In a multi-task bandit problem, different users may interact with the same set of options but respond differently.
  The statistical question is when information should be pooled, and the algorithmic question is how to do this without
  sacrificing the interests of particular users.

<div class="research-related">
  <div class="research-related__group">
    <p class="research-related__label">Projects</p>
    <div class="research-related__links">
      <a href="{{ '/projects/multi-task-bandits/' | relative_url }}">Multi-Task Bandits and Shared Priors</a>
      <a href="{{ '/projects/llm-priors/' | relative_url }}">Priors from Language Models</a>
    </div>
  </div>
  <div class="research-related__group">
    <p class="research-related__label">Related papers</p>
    <div class="research-related__links">
      <a href="{{ '/publications/#bandits%20%2B%20uq' | relative_url }}">View all bandits + UQ papers</a>
    </div>
  </div>
</div>

<a class="anchor" id="causal-learning"></a>
## Causal Inference for Efficient Learning

<p class="question-prompt">Question</p>
When does causal information actually change what can be learned from limited feedback?

### Motivation

Causality is important for decision-making because it provides a framework for understanding cause and effect in the
systems in which decisions are made, and for using that knowledge to improve decisions.

I am particularly interested in the use of causal structure for exchangeability, transportability, and generalisability,
especially in relation to the decision-making questions above.

### Current directions

I am interested in developing tools for causal inference, including Bayesian causal discovery and active causal
discovery, with an emphasis on making these methods more computationally tractable. I am also interested in causal
bandits, where properties of the causal graph can be used to design more informative interventions and improve sample
efficiency.

I am also interested in settings where the causal structure is only partially known, uncertain, or expensive to recover.
This includes problems where one would still like to use causal information for efficient learning without assuming that
the graph is fixed and fully available from the outset.

### Illustrative examples

- In causal bandits, two interventions may look similar from the point of view of reward alone, but differ substantially
  in how informative they are about the underlying system. This makes intervention design a statistical as well as a
  decision problem.
- In causal Bayesian optimization, uncertainty about the graph structure changes what can reasonably be optimized and
  how much confidence one should place in a proposed intervention.

<div class="research-related">
  <div class="research-related__group">
    <p class="research-related__label">Projects</p>
    <div class="research-related__links">
      <a href="{{ '/projects/causal-decision-making/' | relative_url }}">Causal Decision-Making and Bayesian Optimization</a>
      <a href="{{ '/projects/clam/' | relative_url }}">CLAM and Local Effect Estimation</a>
    </div>
  </div>
  <div class="research-related__group">
    <p class="research-related__label">Related papers</p>
    <div class="research-related__links">
      <a href="{{ '/publications/#causal%20learning' | relative_url }}">View all causal learning papers</a>
    </div>
  </div>
</div>

<a class="anchor" id="event-modeling"></a>
## Spatio-Temporal Event Modeling

<p class="question-prompt">Question</p>
How do we build event models that are expressive enough for real data and still interpretable enough to trust?

### Earlier work

This is an earlier line of work of mine, focused on point processes and related models for events evolving over time and
space. I have been particularly interested in interpretable model structure, benchmark design, counterfactual event
generation, and applications in which the model must be understandable as well as predictive.

This work led me to questions at several levels: how to build useful event models, how to evaluate them in a principled
way, and how to understand the limits of counterfactual reasoning in spatio-temporal settings.

### Illustrative examples

- Benchmark design becomes important when different model classes succeed on different kinds of spatio-temporal
  structure. A useful benchmark should therefore vary pattern complexity in a controlled way rather than report a single
  average score.
- Counterfactual event generation is not only a modeling problem. It also raises questions about what should count as a
  meaningful intervention and when a generated counterfactual remains consistent with the real system.

<div class="research-related">
  <div class="research-related__group">
    <p class="research-related__label">Project</p>
    <div class="research-related__links">
      <a href="{{ '/projects/point-processes/' | relative_url }}">Interpretable Spatio-Temporal Point Processes</a>
    </div>
  </div>
  <div class="research-related__group">
    <p class="research-related__label">Related papers</p>
    <div class="research-related__links">
      <a href="{{ '/publications/#event%20modeling' | relative_url }}">View all event modeling papers</a>
    </div>
  </div>
</div>

<a class="anchor" id="adjacent-interests"></a>
## Adjacent Interests

I also have an ongoing interest in fairness-aware learning and human-in-the-loop machine learning, especially where these
questions interact with uncertainty quantification or decision support. This includes earlier work on fairness metrics,
the reliability of AutoML, and engineering during **Julia Summer of Code** on fairness algorithms for the MLJ ecosystem.

<div class="research-related research-related--single">
  <div class="research-related__group">
    <p class="research-related__label">Related papers</p>
    <div class="research-related__links">
      <a href="{{ '/publications/#adjacent%20interests' | relative_url }}">View all adjacent-interest papers</a>
    </div>
  </div>
</div>
