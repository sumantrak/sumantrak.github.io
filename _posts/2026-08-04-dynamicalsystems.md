---
layout: post
published: true
title: "Learning log: Dynamical Systems"
permalink: /blog/2026/into-dynamical-systems/
date: 2026-08-04
description: My first intro to the concepts of dynamical systems.
tags: [dynamical systems]
categories: [learning-log]
post_type: learning-log
meta: Learning log · open to feedback
toc:
  - name: What I am trying to understand
    anchor: what-i-am-trying-to-understand
  - name: Working model
    anchor: working-model
  - name: Open questions
    anchor: open-questions
  - name: References and next steps
    anchor: references-and-next-steps
# Set this to true once Giscus is configured in _config.yml.
giscus_comments: false
---



## Lecture 1

### History of Dynamical Systems
High points, the beginning was in 1666, with Isaac Newton as 24 years old, invents ODEs.

Explains planetary orbits, 2 body problem, elliptical orbits because of gravity.

3 body problem is difficult (the problem of the moon), Gauss, Newton, Euler all fail.

Poincare explains that the 3 body problem cant be solved, using a geometric approach instead of calculus, and observes chaos for the first time.

The Geometric approach is called phase space.
(People like to say Poincare discovered chaos)

Key ingredients of chaos:
A phenomonenon occuring in deterministic systems, (no randomness, present state determines future states)
We observe aperiodic seemingly unpredictable behaviour in deterministic systems.
No equilibrium and doesnt settle down.

It displays sensitive dependence on initial conditions.

Errors get too big and move apart exponentially fast making predictability hard.

Late 1800 and 1900, physics is raging about Quantum mechanics while Poincares work goes unnoticed since its classical mechanics.

1920-1950- Nonlinear oscillators in physics.
Engineering - radio, vacuum tube with a non-linear oscillator.
radar, phase locked loops etc.

1950- computers invented
1960- Lorenz from MIT uses the computer - chaotic systems modelling convection in the atmosphere.

Deterministic aperiodic flow, also ignored, because journal for publishing was different from what Physicists and Mathematicians read.

Kolomogorov,Arnold and Moser (KAM) theory- following the stream of Poincare a pure math approach.

1975 - Bob May noticies chaos in iterated maps, simplified models of population.

Simple nonlinear systems with very complicated dynamics.

Logistic equation in population biology.

Mandelbrot starts fractals, which was ultimately related to chaos.

Winfree - biological rhythms, non-linear oscillators in biology.

Ruelle and Takens - chaos and turbelence, in the navier stokes equations and real fluid systems.

1978 - Feigenbaum, Logistic map and other iterated maps connects to phase transitions.
Universal route to chaos - across different systems that had nothing in common at a scientific level.
Statistical physics and phase transitions.

1980 - Chaos and nonlinear dynamics,  fractals get traction. Featured in jurrasic park even.

1990 - Engineering applications of chaos etc.

### Math of Dynamical Systems - the big picture

Logical structure of dynamics (Anything that changes in time)

Differential equations: $\dot{\boldsymbol{x}}=f(\boldsymbol{x})$ where $\boldsymbol{x} \in \mathbb{R}^n$ and $\boldsymbol{x}= \{ x_1, \dots, x_n \} $

$\mathbb{R}^n$ is the phase space.
and $\boldsymbol{x}$ is the state space.

In components

$$
\begin{align*}
\dot{x}_1 &= f_1(x_1,\dots,x_n) \\
&\vdots\\
\dot{x}_n &= f_n(x_1,\dots,x_n)
\end{align*}
$$

$f1, \dots, f_n$ given function, we say system is linear if all $x_i$ on RHS appear to the first power only.

Autonomous systems, where time doesnt appear in the RHS. To make it time dependent just consider $\dot{t}=1$, we only consider autonomous systems in this course to preserve the nice geometric properties.

#### Non-linear systems examples

Simple Harmonic oscillator: $m\ddot{x} + kx = 0$
To convert it into $\dot{\boldsymbol{x}}=f(\boldsymbol{x})$

We can easily rexpress it as $x_1=x$ and $x_2=dot{x}$

With this choice we can write $\dot{x_1}=x_1$ and $\dot{x_2}=\frac{-kx_1}{m}$

First power for $x_2$ and $x_1$ linear second order system.

Pendulum on the other hand $\ddot{x} + \sin{x}=0$
With $\dot{x_1}=x_2$ and $\dot{x_2}=-\sin{x_1}$, but the second term is non-linear 2nd order.

For small pertubations can be approximately linear, but for big movements most definitely non linear.

Elliptic functions, etc are taught but in the course we will use pictures.

Solution $(x_1(t), x_2(t)) \to$
point moving along a trajectory in space with coordinates $x_1,x_2$.

Think about trajectories in phase spaces.

>Poincares big idea is, we can do the constructions in reverse. Construct what the trajectories look like.Therby gain information about the solution without solving it analytically.

### Phase portrait
Phase portrait is a picture of all qualitatively different trajectories.
We'll without solving the differential equation analytically.

 Types| $n=1$|$n =2$ |$n=3$ |$n > 3$ | $n=\infty (continuum)$|
 ---- | ---|---|---|---|----|
Linear|RC circuit | simple harmonic oscillator|||maxwell equations, wave equation,schrodinger eqn|
Non-linear|Logistic growth |pendulum|||general relativity, turbulence, fibrilation in heart|


PDEs, for linear in the continuum.

### Phase Space and an examples: Chap 2

$\dot{x}= f(x), \quad x \in \mathbb{R}$.

1-D systems
Examples
$\dot{x} = \sin(x)$
single dimensional non linear

Standard approach is by change over variables
But turns messy even for $\sin(x)$


The velocity interpretation, where particle moves on the x axis, then $\dot{x}$ is interpreted as velocity, and we can see the particle moves right when positive and left when negative.
There are places where the velocity is zero, those are fixed points.

Stable and unstable fixed points.







## Working model

Write the simplest account that currently makes sense to you.

- **Core claim:**
- **Why I currently believe it:**
- **Example or toy setting:**
- **Where this model may fail:**

Use equations, diagrams, links, or small experiments when they clarify the idea. Leave uncertainty visible rather than
papering it over.

## Open questions

- What am I missing or conflating?
- Which assumptions deserve to be checked?
- Is there a standard result, term, or reference I should know?
- What is a good next experiment, derivation, or example?

## References and next steps

- [Reference or resource](https://example.com) — why it seems useful.
- Next step:
- Revision note:

---

### Feedback welcome

If you spot an error, know a useful reference, or have a competing intuition, I would be glad to hear from you. Email is
best for now; enable `giscus_comments: true` above after configuring Giscus if you would like discussion directly on the
post.
