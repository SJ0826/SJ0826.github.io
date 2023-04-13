---
layout: archive
permalink: /web/
title: "WEB"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.WEB %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
