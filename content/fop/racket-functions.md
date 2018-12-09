---
title: Functions
date: '2018-12-07T23:00:00'
topic: fop
---

## Our own functions!

Last time, we already explored how we can use functions in Racket. In this part, we explore how to create our own functions. How exciting!

Let's say, for example, we want to write a function that takes a number and gives back (returns) it's square. We'll call it `square`, appropriately enough.

How do we define functions in Racket? By calling a function of course! The `define`-function to be precise.

```scheme
(define (square x) (* x x))
```

Alright one step at a time. As we said, to define a function, we call `define`. `define` takes two arguments, the first one is our function head, so `(square x)` which is first the name of the function and then it's parameters, just x in our case. The head is basically just the way we want to use our function later. The second parameter, the function body, is what we want to return. It can be a primitive or the result of a function call or a function itself. In our case, it is `(* x x)` - the square of `x`.

[[tip | CONVENTION]]
| In Racket function, argument and variable names are all named by convention is **kebab-case**. That means everything is lower-case and words are seperated with a "-".

Now that we have our `square` function, we can use it like any other function.

```scheme
(square 2)
> 4
(square 8)
> 64
```

We will always get the same result, as if we had just used `*`:

```scheme
(* 2 2)
> 4
(* 8 8)
> 64
```

[[tip | TIP]]
| Racket already has this square function; it is called `sqr`.

Why is it helpful to create function? Because most functions are a bit more complex than squaring numbers and because we are less prone to errors, if we split our program up in functions. Let's consider this example: We want to calculate the area of a circle (`A = π \* r<sup>2</sup>). This is short enough, we don't really need a function, right? Anywhere we want to use it, we just do this:

```scheme
;; ...
(* 3.14 (sqr r))
;; ...
```

After a few weeks, we copied this code dozens of times across our project with over a 1000 lines of code. But later on we reaize our results are not accurate enough, because our approximation for pi is too simple. To fix this, we have to use our new approximation **everywhere** we used the old one. If we miss it just once, we still aren't accurate enough. Had we just written a function, we could have just edited it once.

```scheme
;; Much more accurate (For reference: https://www.youtube.com/watch?v=bFNjA9LOPsg)
(define (area-of-circle r)
  (* 3.2 r r)
)
```