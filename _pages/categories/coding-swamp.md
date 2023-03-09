---
layout: archive
permalink: /project/coding-swamp/
title: "모여봐요 코딩의 늪 🐊"
excerpt: "스터디와 모각코를 모집하는 웹앱 프로젝트"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.coding-swamp %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
