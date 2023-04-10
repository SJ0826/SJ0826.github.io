---
layout: archive
permalink: /project/random-message/
title: "메세지가 도착했습니다 ✉"
excerpt: "익명 랜덤 메세지를 주고 받는 프로젝트"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.random-message %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
