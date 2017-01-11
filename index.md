---
#### [Home](hafbau.github.io/README.md "Go Home") | [W1D1](notes-w1d1.md "Week One Day One") | [W1D2](notes.md "Week One Day Two")
---

# Week One: Day Two


## Lecture One: Dev Workflow focussing on Debugging and Problem solving:
How to work iteratively and incrementally. How to debug. How to manually test your code. Writing clean code.

### Problem Statement:
* Write a node program
* It takes unlimited command line arguments
* Goes through each and prints out the sum
* Skips arguments that aint whole number
* Do not support whole numbers

### Key take aways:
- commit / push as often as possible (at any code that runs - opinionated)
- pseudocode not overly mandatory especially when familiar with language - opinionated
- console.log to debug as you code; checking hypothesis with incremental steps
- function names should portray action
- use `node.debug` and `debugger` / `repl`
- use markdowns to take notes
- use proper indentations!
- opinions on end of scope semi-colon: to add or not to add that is your choice!
- when style is opinionated, consistency is key. Team preference may define consistency
- get used to opening a whole project in sublime


## Notes on Today's Work Activities
- function names should be short and memorable
- functions purpose can either be to return or perform side effect (like `console.log`)
- functions that use / manipulates global variables are not the best
- pure functions take in argument and return something
- it is posible for function to return something and have side effect at the same time (its preferabble to keep things simple though)
- **Question:** is there a good time for functions to manipulate externally scoped variable? maybe when used as methods?
- style: use camelCase for function naming


## Breakout: Reading Code and Scopes in JS
- watch out for overuse of global scopes (something about php?)
  -risk to lose track of variable status
- programs starts running in the global scope
- `var` is limited by the functional scope that defines them
- parameters are limited in the function scope
- to get rid of a var variable (like garbage collection), set it to `undefined`. In JS this is unnecessary!
- introducing Array#forEach and how it takes function as argument
- variable used in a function without the `var` definition gets added to the global scope **after** the function is run
- scopes have a namespace? **Question:** is scope and namespace interchangeable?
