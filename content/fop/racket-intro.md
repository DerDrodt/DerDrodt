---
title: Introduction to Racket
date: '2018-12-03T23:00:00'
topic: FoP
---

## The Basics

[[warning | CONFUSING]]
| When I say "Racket" here, I actually mean HtDP-TL (or **H**ow **t**o **D**esign - **T**eaching **L**anguage). But no one likes to say, hear, or in fact read that, obviously. And since HtDP-TL and Racket are quite similiar and everyone calls it Racket anyway, I am sticking with that.

Racket is a _functional programming language_, which means that in Racket (almost) everything we do is through functions.

Let's say, for example, we want to calculate `2 + 3` in Racket, becuase that task is obviously way too complex to do it by hand. We **can't** just write `2 + 3` because Racket wouldn't understand that. `+` however is a _function_, which means we can _call_ it. _Calling_ a function means that we let the function do its calculation and then get its result back. For that calculation functions often need data to do these calculations, numbers to add for example. These data is what we call _parameters_ or _arguments_.

To calculate `2 + 3` we call the `+`-function with 2 and 3 as parameters. Calling a function in Racket looks like this: `(name param1 param2 ...)`.

```scheme
(+ 2 3)
> 5
```

So what just happened there? We called a function with the name `+`, which is predefined in the Racket language, with the parameters 2 and 3. This function then calculated this addition and _returned_ it, meaning it gave us the result back.

And `+` isn't the only function Racket gives us right out of the box. There are a lot of them and we will explore a lot of them later, but here are some arithmetic functions:

```scheme
(- 5 3)
> 2

(* 2 3)
> 6

(/ 8 4)
> 2
```

Okay, so we know what functions are. Great! But are there other things in Racket? We already used numbers, is there more? And what's the difference between functions and other things?

## Primitives and Expressions

In Racket (and most other languages) we have _primitives_. Primitives are _expressions_ that are their own value. The number `2` for example **is** `2`. That is it's value and how it represented and used. Functions however are not their own value, we have to _evaulate_ them to get it.

There are other primitives in Racket, like booleans, strings and symbols. Booleans are either `true` (short: `#t`) or `false` (short: `#f`). Strings are basically text, like `"This is my text."` and symbols, like `'cat` are somewhat similiar to strings, but can't have whitespace and are easier to compare.

We will explore all of these in more detail later and use all of them in examples, so you can familiarize with them.

In the next part, we will dive deep into functions.
