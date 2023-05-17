---
layout: archive
permalink: /nextjs/
title: "Next.js"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.Nextjs %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
