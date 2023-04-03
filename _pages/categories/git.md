---
layout: archive
permalink: /git/
title: "Git"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.Git %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
