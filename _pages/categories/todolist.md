---
layout: archive
permalink: /project/todolist/
title: "TodoList_Project"
excerpt: "원티드에서 진행한 TodoList과제에 고민하던 부분을 적용하고 참가했던 모든 팀의 Best Practice를 정리해 흡수하기 위해 만들어진 투두리스트 프로젝트"
author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.TodoList-Project %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
