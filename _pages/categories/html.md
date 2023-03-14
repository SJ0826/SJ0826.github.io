---
layout: archive
permalink: /html/
title: "HTML"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.HTML %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
