---
layout: "portfolio"
title: "Work"
description: "Research ideas made tangible: products, research tools, professional learning and experimental designs."
permalink: "/work/"
lang: "en"
---

<div class="filter-bar" data-filter-for="work-list" aria-label="Filter work"><button aria-pressed="true" data-filter="all">All work</button><button aria-pressed="false" data-filter="products">EdTech products</button><button aria-pressed="false" data-filter="tools">Research tools</button><button aria-pressed="false" data-filter="services">Professional development</button><button aria-pressed="false" data-filter="experiments">Prototypes</button></div><p class="filter-status" aria-live="polite"></p><div class="work-grid" id="work-list">{% assign projects = site.projects | sort: 'order' %}{% for project in projects %}{% include work-card.liquid project=project %}{% endfor %}</div>
