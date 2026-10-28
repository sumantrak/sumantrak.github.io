---
layout: default
permalink: /blog/
title: blog
nav: false
nav_order: 1
---

<section class="blog-index">
  <header class="blog-index__intro">
    <p class="blog-index__eyebrow">Writing</p>
    <h1>Notes for thinking in public.</h1>
    <p>Research ideas, technical explainers, and occasional detours into subjects worth understanding more carefully.</p>
  </header>

  {% assign learning_logs = site.posts | where: 'post_type', 'learning-log' %}
  {% assign lecture_notes = site.posts | where: 'post_type', 'lecture-notes' %}
  {% assign finished_notes = site.posts | where_exp: 'post', "post.post_type != 'learning-log' and post.post_type != 'lecture-notes'" %}

  {% if finished_notes.size > 0 %}
    <section class="blog-index__section" aria-labelledby="finished-notes-heading">
      <header class="blog-index__section-header">
        <h2 id="finished-notes-heading">Finished notes</h2>
        <p>More complete explanations and essays.</p>
      </header>
      <div class="blog-index__list">
        {% for post in finished_notes %}
          {% include blog_entry.liquid post=post %}
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {% if lecture_notes.size > 0 %}
    <section class="blog-index__section" aria-labelledby="lecture-notes-heading">
      <header class="blog-index__section-header">
        <h2 id="lecture-notes-heading">Lecture notes</h2>
        <p>Notes, derivations, and questions gathered while learning.</p>
      </header>
      <div class="blog-index__list">
        {% for post in lecture_notes %}
          {% include blog_entry.liquid post=post %}
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {% if learning_logs.size > 0 %}
    <section class="blog-index__section" aria-labelledby="learning-logs-heading">
      <header class="blog-index__section-header">
        <h2 id="learning-logs-heading">Learning logs</h2>
        <p>Provisional notes, shared early for questions, corrections, and better ideas.</p>
      </header>
      <div class="blog-index__list">
        {% for post in learning_logs %}
          {% include blog_entry.liquid post=post %}
        {% endfor %}
      </div>
    </section>
  {% endif %}
</section>
