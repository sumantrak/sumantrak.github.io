---
layout: post
post_type: learning-log
published: true
title: "Learning log: Machine Learning Theory"
permalink: /blog/2026/ML-theory/
date: 2026-08-03
description: My understanding of machine learning theory
tags: [learning-log, learning-theory]
categories: [learning-log]
meta: Learning log · open to feedback
toc:
  - name: What is learning
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

I am currenty watching the youtube series on Machine Learning Theory, taught by Shai-Ben David from the University of Waterloo in 2015.
I document my understanding of the lectures here.
If you are reading this and spot some errors in my understanding / have tips for better exposition, or have a different model than mine, please reach out to me at [email](mailto:mukherjeesumantrak+blog@gmail.com)
Would love to hear from you.

## Why learning theory, whats the broad vision?

I am planning on starting graduate studies soon, and while the topic is still undecided I am inclined towards doing something in the interesection of control-theory and machine-learning.
My inclination is to do some fundamental/deeply theoretic work.
Therefore trying to get the basics right before starting to contribute to the theory myself.

## Lecture 1

### What is learning?
Learning is defined as the conversion of experience to expertise.
To motivate learning we looked at some examples of learning in animals.
Animals adapt their behaviours based on experiences they have.

**Example 1:** Rats exhibiting bait shyness.
Rats will only consume a small bit of poisoned food, observe how they feel before eating more

*Takeaway:* The rat learns to observe, some relation between their consumption of the bait and them feeling nauseous and therefore modifies their behaviour to not consume the food.


**Example 2:** Pigeons and their spurious attributions. If you surround pigeons with some toys, they will peck on it, and simultaneously if you sprinkle food, completely unrelated to the toy they will make a misassociation between their pecking on the toy and the food.

*Takeaway:* It is possible to have superstitions or spurious correlations, and one must use common sense to rule out nonsensical explanations, we as humans are also perhaps susceptible to this, however we must figure out a way to bake in what reasonable relations are.

**Example 3:** Bait shyness, but with some modifications, we observe that if we replace the feeling of nausea for the rat with electrical shocks or the eating of the food with some other auditory signal, then there is no update in behaviour of the rats.

*Takeaway:* The behavioural adaptation of the rat strongly depends on some prior information on what may or may not affect the feeling of nausea as demonstrated by this experiment (this is probably baked into the rat from years of evolution), in the scenarios where such associations are not commonly observed its unlikely the rat changes its behaviour.

### Why should we be interested in Machine Learning?
I think I dont really need to motivate myself to be interested in this topic, but still it makes sense to rehash whats the relevance of machine learning.

- Not all rules are programmable or can be explained easily
- Humans may not be able to solve some complex problems
- Adaptivity - funnily enough, still in 2026 this continues to be a big problem, however back then the discussion was a fixed rule remains fixed, if programmed once, but a machine learner may conditioned on new data be able to adapt to new situations.

One thing to note is that machine learning may be inspired from learning in animals or nature.
But we should not aim to mimic it, there may be better ways of learning and being more efficient and scalable.

## Lecture 2

Big idea in this lecture was basically introducing inductive bias and defining ERM within the class of hypothesis.


### A formal model for learning
We consider the following objects in our formal model
We consider the domain set $\mathcal{X}$.
We consider the label set $\mathcal{Y}$.
The learner takes as input samples $S = \\{(x_1,y_1),\dots, (x_2,y_2)\\}$
The output of the learner is a rule $h(x)$ defined on any input $x$.

Running example for explaining the story,
We shall consider the case of predicting the taste of papayas based on two attributes, softness and color.
The labels for the papaya is tasty or not tasty, and therefore $\mathcal{Y} := \{0,1\}$


Given this formal model, we define a way to evaluate our output.
To do so we introduce the first strong assumptions in our modelling.
We assume that there exists a function $f: \mathcal{X} \to \mathcal{Y}$, which determines the output of any input $x$.

Secondly we assume our inputs to the model are distributed according to $D$.
We dont make any further assumptions on the form of $D$, and don't assume we know this.

There is one more strong assumption that we make, that is the inputs are sampled iid from the distribution $D$.

Under these assumptions we can define

$$L_{D,f}(h)=\mathbb{P}_D[\\{h(x)\neq f(x)\\}]$$
our evaluation for a learners output $h$.

How to interpret this evaluation.
Here we say that our learner performs badly, when the output of the learner disagrees with the true label.
However, with a small caveat that we don't care about all inputs equally, we only care about the inputs depending on how likely they are to appear in the population.

This evaluation cannot be done in practise, because this requires access to $D$ that we dont have.
In literature this loss, may also be referred to as risk.
And the objective of a learner is to output a training rule which minimises this risk.

However, as we explained above this is not possible in practise, because of our lack of knowledge of $D$.
Instead we can define the empirical risk.
The empirical risk is defined on the samples $S$.

So we shall define it as
$$L_S(h) = \frac{|\{i \in [m]: h(x_i)\neq f(x_i)\}|}{m}$$

And our hope shall be if we minimize this empirical risk, we shall also perform well on the true risk.

And here we shall run into our first problem.
Lets assume a decision rule for a set of samples $S$ which produces the correct labels for all samples $S$,
but produces incorrect labels for all samples not in $S$.

So in our running example

## Lecture 3
Big ideas were introduction to Probably Approximately Correct (PAC) Learning.

Relaxation of the realisability principle maybe, there is no function f generating the data instead there is just some distribution.

So the goal in this lecture was to basically bound the error with respect to this distribution.



## Lecture 4
From classification to continous spaces etc

Generalised theory of learning
some domain Z, set of models M and some loss function evaluation a model on a given instance.

Data generated by some unknown distribution, over Z

Our aim is to find the best model for this unknown distribution.

Loss is defined wrt distribution D of some model H as the expectation,

$$L_D(h) = \mathbb{E}_{Z\sim D} l(h,z)$$

So far Z is some distribution on $X \times \{0,1\}$
M is function from $X$ to $\\{0,1\\}$
$$
 l(h,\underbrace{(x,y)}_z) =
 \begin{cases}
 1 & h(x)\neq y\\
 0 & h(x)=y\\
 \end{cases}
 $$

 Generalisation to multiclass prediction as an example.
 $l(h,(x,y))$ still is basically if you got the label right or wrong, however under the expectation it is generalisation.

 In regression, the squared distance loss is pretty common to use as a loss $l(h,(x,t))$, where there is notion of a big or small mistake thats $(h(x)-t)^2$ square loss.
 We try to find a rule to minimise this loss.
 What we learn about statistical learning theory still valid here.

 Clustering, representing data by some k code words.
 $Z \in \mathbb{R}^d$ where $M=$ vectors of k members of $\mathbb{R}^d$.

 $h = {c_1, \dots, c_k}$
 Every signal coded by one of the code words. We pay the cost of distortion.

 Agnostic PAC Learning is very general, examples above illustrate the same.

 #### First Learning Paradigm - Learning via Uniform Convergence

 We dont know the distribution $D$, but know a sample.
 So how well does the sample represent the distribution.

 Definition: A sample $S=(Z_1, \dots, Z_n)$ or $S=((x_1,y_1),\dots (x_n,y_n))$
is $\epsilon$ representative of class $H$ wrt a distribution $D$, if $\forall H$  $|L_S(h)-L_s(D)|\leq \epsilon$.


Where $L_s(h)=\frac{1}{m}\sum_{z\in S}l(h,z)$


Good sample if loss measured on the sample is close to the true loss.

If we know the sample is a good representation how do we find a good hypothesis wrt the sample.
Simply do ERM, wrt sample.

Claim : If S is $\epsilon$-representative of H wrt D, ERM_H functions h_s
$$L_D(h_s) \leq \min_{h\in H}(L_D(h)) + 2\epsilon$$

What this means is if your sample is representative then optimising wrt samples gives you a pretty good guarantee that you are optimising wrt the distribution.

Pro



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
