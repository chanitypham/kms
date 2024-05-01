---
time: 2024-03-16T14:11:00
tags: 
child:
---
## what is big-theta notation
- mathematical way to express average case of an algorithm running time - most realistic time complexity
- normally used when best case $O$ = worst case $\Omega$
- formula: $f(n) = \theta(g(n))$ IFF $c_1.g(n) \leq f(n) \leq c_2.g(n)$, where $n\geq n_0; c_1,c_2>0; n_0 \geq 1$ 
	- c: constant
	- n: natural number denoting size of the algo
- example: [pic](https://i.imgur.com/1fyJBmo.png)
