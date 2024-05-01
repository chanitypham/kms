---
time: 
tags: 
child:
---
## consistent heuristics vs admissible heuristics
- <u>note:</u> C is goal, A is node
- admissibility: $h(A) \leq h^*(A)$ 
- consistency: heuristic arc cost $\leq$ actual cost for each arc: $h(A) - h(C) \leq cost (A\;to\;C)$
- [pic of inconsistency](https://i.imgur.com/1ia8Xs5.png)
	- as  h=1 at C => it should be h=2 at A

## purpose of consistency
- f-value along a path never decreases
	- $h(A) \leq cost (A\;to\;C) + h(C)$: from the definition of consistency
	- $f(A) = g(A) + h(A) \leq g(A) + cost (A\;to\;C) + h(C) = f(C)$: add backward cost
