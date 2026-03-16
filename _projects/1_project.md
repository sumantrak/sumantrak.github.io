---
layout: page
title: Multi-Task Bandits and Shared Priors
permalink: /projects/multi-task-bandits/
description: How shared structure across tasks can make exploration more sample efficient.
img: assets/img/sumantrak_profile.jpeg
importance: 1
category: decision-making
related_publications: true
giscus_comments: false
---
## Summary

This project studies how information should be shared across related bandit tasks rather than relearned from scratch.

## Research Question

When multiple users or tasks are related, what forms of shared structure can be exploited to improve exploration without
collapsing meaningful task-specific differences?

## Methodology

- Bayesian and structured-prior views of multi-task bandits
- Information sharing across related users or tasks
- Emphasis on sample efficiency and best-arm learning under limited data

## Key Contributions

- Frames multi-task bandits as a problem of prior construction rather than isolated per-task optimization
- Connects transfer, shared structure, and exploration efficiency
- Serves as a foundation for future work on priors informed by external knowledge

## Outputs

- Publication: {% cite mukherjee2025multitaskbandits %}
