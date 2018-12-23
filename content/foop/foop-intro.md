---
title: Introduction to FOOP
date: '2018-12-02T22:00:00'
topic: FOOP
---

In this series of blog posts, we will learn how and why and how to program, by looking at the two most popular wys of programming: **F**unctional and **O**bject **O**riented **P**rogramming. We'll both look at the theory behind it and write actual code.

The languages we will look at, are _Racket_ (or rather HtDP-TL) on the functional side and Java on the OOP side.

## What is a Program?

A program is a series of commands we write for a computer to execute. Everything you do on your computer and smartphone is a program and works, because the computer can understand it. But since computers only understand instructions written in 1s and 0s, but humans don't, we created special languages to write programs we can read and we can transform to something computers can understand. This transformation of our _source code_ written in a programming language to _byte code_ is called compiling. We have to compile most languages, like Java and C. These are called compiled languages, fittingly enough. Other languages like JavaScript, Ruby or Racket do not have to be compiled and are just run by another program directly, they are interpreted languages.

Every programming language is unique and has a very specific way of solving problems. A lot are specialized for specific problems, like vector and matrix calculations, while others like Java are general purpose languages. There are **a lot** of programing languages. While there are roughly [6,500 spoken languages in the world today](https://www.infoplease.com/askeds/how-many-spoken-languages), there are [between 5,000 and 25,000 programming languages in the world](http://codelani.com/posts/how-many-programming-languages-are-there-in-the-world.html). Obviously only a few of those are widely used and most of them are written for a very niche use-case, but this shows the sheer size of the programming world.

A common way to group these languages is whether they are _functional_, meaning the functionality of our program is divided into _functions_, or _object oriented_, meaning ou functionality is divided into _object_. We'll explore what this exactly means later on. The point of this series is **not** however which approach is better, because it can't be. Both have their advantages and disadvantages and I'm fairly certain, the ultimate programming languages that is the best to use under all circumstances hasn't been invented yet. Part of your job as a developer is to choose the right language, tools and approach for a given problem, because sometimes a functional approach would be better than an object oriented one, sometimes not so much.

In my experience the best way to learn is by example and exercise, so we will explore common patterns, problems and solutions in programming while learning first Racket than Java and solve exercises.

Let's begin in Racket.
