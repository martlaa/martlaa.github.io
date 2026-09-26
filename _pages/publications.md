---
layout: "portfolio"
title: "Publications"
description: "A curated selection connecting mathematics, computing, digital competence and educational design."
permalink: "/publications/"
lang: "en"
---

<p class="source-note">The complete record is maintained in <a href="https://www.etis.ee/CV/Mart_Laanpere/eng/">ETIS</a>. This selection is curated from that record and original publisher sources.</p><div class="filter-bar" data-filter-for="publication-list" aria-label="Filter publications">{% assign topics = 'All,Mathematics,Computing,EdTech,Digital Competence,AI' | split: ',' %}{% for topic in topics %}<button data-filter="{% if forloop.first %}all{% else %}{{ topic }}{% endif %}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}">{{ topic }}</button>{% endfor %}</div><p class="filter-status" aria-live="polite"></p><div class="publications" id="publication-list">{% bibliography %}</div>
