---
layout: post
published: true
title: "Lecture notes: Towards and Algorithmic Theory of Machine Learning via Kernel Methods"
permalink: /blog/2026/algorithmic-theory-kernel-methods/
date: 2026-08-04
description: Notes and derivations from lecture by Boumediene Hamzi.
tags: [lecture-notes, topic]
categories: [lecture-notes]
post_type: lecture-notes
math: true
toc:
  - name: Main idea
    anchor: main-idea
  - name: Definitions and setup
    anchor: definitions-and-setup
  - name: Derivation or example
    anchor: derivation-or-example
  - name: Questions and references
    anchor: questions-and-references
---

> These are personal lecture notes. They may be incomplete or contain mistakes; please consult the original course material
> for authoritative statements.

## Main idea

The operator theoretic bridge between machine learning, algorithmic information theory, and dynamical systems are kernel methods.

Compression, learning and inference are manifestation of the same principle.

Principle of Occam from Solomonov Induction
Algorithmic nature of simplicity - compute through kernel methods
Eigenvalues of an integral operator, associated with a kernel.
Kernel build from Kolmogorov complexity.

Short program - large weights
larger eigenvalues - faster rates
simple hypothesis - higher posterior

Why solomonoff induction is interesting to look at - the problem of induction.

Simplification of Dynamical systems is kind of compression, so reduction of Kolmogorov Complexity, from non-linear PDE to linear PDE or other methods.

Kernel complexity (KC) via MDL
Kolmorogov KC as a measure of similarity.
HSIC is approximating AMI somehow?

Complexity spectral correspondence via KC-spaces

Special kind of RKHS called Solomonoff Kernels and Solomonoff Gaussian Processes

Big takeaway is when the program length and complexity is manifesting itself in spectral mass.


Compression -> Spectrum -> Learning -> Learning Speed -> Compressibility

What is exactly the solomonoff prior,
why is ideal, and why is not computable

Computable surrogate leads to the solomonoff kernel.


- **Definition:**
- **Assumptions:**
- **Notation:**

For inline mathematics, write `$p(x)$`. For a displayed equation, write:

$$
\mathbb{E}[X] = \int x p(x)\,dx.
$$

## Control has met learning
https://blog.simons.berkeley.edu/2021/07/trends-in-machine-learning-theory/

Adaptive Control
1960-2020
first 20 years - Linear control MRAC pole placement
next 10 years - non linear systems control with backstepping


## Questions and referencese

- Open question:
- [Course material or reference](https://example.com)
- Next review step: