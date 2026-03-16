---
layout: page
permalink: /publications/
title: publications
description: Papers, workshops, and preprints. Venue is highlighted; preprints and under-review work are labeled explicitly.
nav: true
nav_order: 4
---
{% include bib_search.liquid %}

<p class="publications-note">
  This list includes archival publications, workshop papers, and ongoing work. Entries marked as <em>Preprint</em> or
  <em>Under review</em> are works in progress.
</p>

<h2 class="section-heading">Selected</h2>
<div class="publications">
  {% bibliography --group_by none --query @*[selected=true]* %}
</div>

<h2 class="section-heading">Full List</h2>
<div class="publications">
  {% bibliography %}
</div>
