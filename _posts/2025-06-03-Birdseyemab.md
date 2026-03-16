---
layout: distill
title: "A Bird’s-Eye View of Multi-Armed Bandits"
permalink: /blog/2025/birds-eye-view-multi-armed-bandits/
description: A structured exploration of bandit problem types, their assumptions, modeling frameworks, and real-world applicability.
tags: [multi-armed-bandits, machine-learning, distill, decision-theory]
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

bibliography: bandits.bib

toc:
  - name: Introduction
  - name: A Historical and Cross-Disciplinary Perspective
  - name: Taxonomy of Bandit Problems
    subsections:
      - name: Feedback Variants
      - name: Structural Variants
      - name: Contextual Variants
      - name: Temporal Variants
      - name: Strategic & Adversarial Variants
      - name: Constraint-driven Bandits
  - name: Formalism, Intuition, and Examples
  - name: Generalizations and Beyond
  - name: When Algorithms Fail
  - name: Interactive Simulations
  - name: References
---

> A unified top-down overview of the Multi-Armed Bandit landscape — from motivation and intuition to formal structure and experimental interactivity.

---

## 🧭 Introduction

Imagine you're a doctor testing different treatments, a website testing ad designs, or an e-commerce platform choosing what product to feature. Every decision involves uncertainty and a goal: maximize reward while learning from experience. This is the essence of **Multi-Armed Bandits (MABs)**.

This blog focuses not on deriving regret bounds or proving theorems, but rather:
- **Understanding the motivation and intuition** behind MAB formulations
- **Exploring real-world scenarios** that shaped these variants
- **Illustrating how algorithms behave** — and sometimes fail
- **Offering interactive visualizations** to deepen understanding

---

## 📜 A Historical and Cross-Disciplinary Perspective

The term "multi-armed bandit" comes from the analogy of a gambler facing several slot machines (each with unknown payout rates). It was first formalized by Thompson (1933), and later studied deeply by Robbins (1952) and others.

Over decades, MABs have become foundational across domains:
- **Statistics**: experimental design, A/B testing
- **Economics**: pricing and auctions
- **Reinforcement Learning**: exploration-exploitation tradeoff
- **Causal Inference**: identifying intervention effects
- **Cognitive Science**: modeling human curiosity and exploration

---

## 🧱 Taxonomy of Bandit Problems

We categorize MAB extensions into six broad families:

| Category                        | Core Extension                             | Examples                            |
|--------------------------------|--------------------------------------------|-------------------------------------|
| Feedback Variants              | How the learner receives feedback          | Partial, Delayed, Preference-based  |
| Structural Variants            | Structure in actions or rewards            | Combinatorial, Linear, GP           |
| Contextual Variants            | Extra information at decision time         | Contextual, Meta-contextual         |
| Temporal Variants              | Environment dynamics over time             | Nonstationary, Restless, Rotting    |
| Strategic / Adversarial        | Strategic agents or adversarial rewards    | Adversarial, Multi-agent            |
| Constraint-driven              | Constraints on safety, fairness, budget    | Safe, Budgeted, Fair, Sleeping      |

---

## 🧠 Formalism, Intuition, and Examples

### 🎯 Standard MAB Setup
The heart and soul of the MAB problem is to intelligently balance exploration and exploitation to maximize payoff over time. 
Exploration is reducing uncertainty over the payoffs for the arms, however not reducing uncertainty globally but rather reducing uncertainty for arms which have potentially high payoffs.
Intuition for this could be in spotify music for example, if we know that a user does not like a particular song with some certainty there is no utility in investigating how much the user dislikes that song.
From an information theoretic sense, the bandit problem is constructing experiments which minimise the entropy over the optimal arm, that is conduct informative experiments $$I(\Pr(a^*);\mathcal{E})$$ where $$\Pr(a^*)$$ is the probability of optimal arms

The standard bandit framework considers, numerical scalar feedback. But feedback could be a vector when the user cares about multiple objectives, the bandit could recieve comparative / ordinal feedback or preferential feedback. The feedback might be corrupted where there is missingness in data (missingness at random or biased missingness) or delayed.

The optimality of an arm is subjective, arms could have associated costs and bandits might be interested in finding cost effective but satisficing arms, the bandits goal might put safety first or might try to find the best arm in the least amount of time.

Depending on the objectives of the bandit the strategy for playing arms will evolve. The general principle or goal for bandits remain the same, based on underlying structure of the problem, the

While the standard setting considers, 

At each round \( t = 1, 2, \dots, T \):
- The agent selects an arm \( a_t \in \mathcal{A} \)
- Receives reward \( r_t \sim \mathcal{D}_{a_t} \)
- Goal: maximize expected cumulative reward or minimize regret

#### Objectives:
- **Cumulative Regret**:  
  \( R_T = \sum_{t=1}^T (r^* - r_t) \)
- **Simple Regret**:  
  \( R_T^{\text{simple}} = r^* - \mathbb{E}[r_{\hat{a}}] \)

---

## 🧩 Feedback Variants

### Dueling Bandits  
- Feedback: preference between two arms  
- Objective: find best arm using pairwise comparisons  
- Use case: UI design, recommendation systems  
- Generalization: Ordinal Bandits (rankings, top-k feedback)

### Partial Monitoring  
- Feedback signal is indirect or noisy  
- Often modeled via feedback graphs  
- Generalization: Graph Feedback Bandits

---

## 🧩 Structural Variants

### Combinatorial Bandits  
- Action = subset of base arms  
- Reward = sum or function over subset  
- Use case: ad selection, sensor networks  
- Generalization: Submodular Bandits

### Linear Bandits  
- Each arm has a feature vector \( x \), reward \( r = x^\top \theta + \eta \)  
- Use case: portfolio selection  
- Generalization: Generalized Linear Bandits, Non-linear Bandits (e.g., neural)

---

## 🧩 Contextual Variants

### Contextual Bandits  
- Observe context \( x_t \), choose action \( a_t \), get reward \( r_t \)  
- Use case: personalized content, dynamic pricing  
- Generalization: Meta-Contextual Bandits (transfer across tasks)

---

## 🧩 Temporal Variants

### Nonstationary Bandits  
- Reward distributions change over time  
- Use case: recommendation systems, financial markets  
- Generalization: Change-point models

### Restless Bandits  
- Arms evolve even when not played  
- Use case: network routing, resource allocation  
- Generalization: POMDP Bandits

---

## 🧩 Strategic / Adversarial Variants

### Adversarial Bandits  
- No assumptions on reward generation  
- Worst-case regret bounds  
- Generalization: Bandits with Switching Costs

### Multi-agent Bandits  
- Multiple learners interacting  
- Use case: federated learning  
- Generalization: Bandit Games (game-theoretic dynamics)

---

## 🧩 Constraint-driven Bandits

### Safe Bandits  
- Ensure low probability of catastrophic outcomes  
- Use case: clinical trials  
- Generalization: Constrained MDP Bandits

### Budgeted Bandits  
- Limited total cost or rounds  
- Use case: online ad allocation

### Fair Bandits  
- Enforce fairness across groups or actions  
- Use case: hiring platforms  
- Generalization: Group-aware Fairness, Long-term Fairness

### Sleeping Bandits  
- Availability of arms varies per round  
- Use case: edge computing, ride-sharing  
- Generalization: Opportunistic Bandits

---

## 🌱 Generalizations and Beyond

Each variant can be extended further by combining aspects:
- **Contextual + Structural** → Contextual Combinatorial Bandits
- **Safe + Nonstationary** → Constrained Adaptive Bandits
- **Ordinal + Budgeted** → Budget-aware Preference Learning

Many problems lie on this continuum. Understanding these intersections helps in modeling realistic, rich environments.

---

## 🚨 When Algorithms Fail

Even the best-known algorithms can fail under misspecification:
- **Thompson Sampling** with poor priors
- **UCB** in nonstationary environments
- **Epsilon-Greedy** under sparse rewards

We’ll illustrate these behaviors via interactive simulations.

---

## 🧪 Interactive Simulations

Coming soon: tweak ε in ε-Greedy, visualize Thompson Sampling posteriors, simulate contextual scenarios.

---

## 📚 References

```bibtex
@article{thompson1933likelihood,
  title={On the likelihood that one unknown probability exceeds another in view of the evidence of two samples},
  author={Thompson, William R.},
  journal={Biometrika},
  volume={25},
  number={3/4},
  pages={285--294},
  year={1933},
  publisher={Oxford University Press}
}
...
