---
title: "π¨ Assignment to constant variable."
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "μλ¬", "μμ", "λ³μ"]
last_modified_at: 2023-02-27T08:06:00-05:00
---

## π¨ Assignment to constant variable.

μλ°μ€ν¬λ¦½νΈ ν΄μ¦λ₯Ό νΈλλ° μ½λμ λΉ¨κ° νμλ μλ¬λλ° μλ¬κ° λ΄λ€.

μ§μ­νλ©΄ **μμκ°μ λ³μμ ν λΉ**νλ€λ λ»μ΄λ€.

```js
function countBiggerThanTen(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number > 10) {
      sum += 1; // TypeError: Assignment to constant variable.
    }
  });
  console.log(sum);
}
```

## μμΈ

μ΄λ―Έ μ μΈν const λ³μμ μλ‘μ΄ κ°μ ν λΉνμ λ λ°μνλ€.

μ μ½λμμ κ³μ κ°μ΄ λ°λλ sumμ μμλ‘ μ μΈνλ€.

## ν΄κ²°

κ°μ μ¬ν λΉμμ μ¬μ©ν  μ μλ `let`μΌλ‘ λ°κΎΈμ΄ μ£Όμλλ μ μμ μΌλ‘ λμνλ€.
