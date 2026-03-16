---
layout: page
title: projects
permalink: /projects/
description: Research projects, each organized around a concrete question.
nav: false
nav_order: 3
display_categories: [decision-making, causality, event-modeling]
horizontal: true
---
<div class="projects-intro">
  <p>
    These pages are structured as research dossiers rather than portfolio cards. Each project page is meant to capture
    the motivating question, the modeling choices, and the outputs that belong together.
  </p>
</div>

<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category | replace: '-', ' ' }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in categorized_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
{% endfor %}
</div>
