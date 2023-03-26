---
layout: archive
permalink: /books/
title: "독서기록 📖"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.books %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
