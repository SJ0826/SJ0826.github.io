---
title: "π¨ Cannot use import statement outside a module"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "μλ¬", "import"]
last_modified_at: 2023-02-27T08:06:00-05:00
---

## π μλ¬ λ°μ

κ³΅μ° κ²μκΈ° νλ‘μ νΈ μ€ μλ¬κ° λ°μνλ€.
![image](https://user-images.githubusercontent.com/56298540/204087683-584215fd-951e-4b24-af3a-1d91c588a46d.png)

## β μμΈ

ν΄λΉ μ€ν¬λ¦½νΈλ₯Ό λͺ¨λλ‘ μΈμνμ§ λͺ»ν΄ `import`λ¬Έμ μΈ μ μλ€λ λ»μ΄λ€.

μ§μ  μ€ν¬λ¦½νΈμ νμμ μ§μ ν΄μ£Όμ΄μΌ νλ€.

## β ν΄κ²°

**[index.html]**

```js
<script src="main.js" type="module"></script>
```

μ΄λ κ² ν΄λΉ μ€ν¬λ¦½νΈ νκ·Έμμ νμμ λͺ¨λλ‘ μ§μ ν΄μ£Όλ©΄ μλ¬κ° ν΄κ²°λλ€.
