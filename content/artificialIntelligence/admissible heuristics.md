---
time: 2024-03-20T00:38:00
tags:
  - computerScience/DSA/a-starSearch
  - computerScience/AI-ML/optimization/a-starSearch
child:
  - "[[manhattan's distance]]"
  - "[[8 Puzzle]]"
---
## what is heuristic
- a heuristic (function) to speed up the process of finding optimal solution
- eg. number of pancake out of order (pancake problem), number of titles misplaced (8 puzzle problem)
- an underestimation of the actual cost we will incur

## what is admissibility
- estimate how much cost from current state -> goal state  

## pessimistic & optimistic heuristic
- pessimistic / inadmissible heuristics break optimality by trapping good paths on the fringe, [example](https://i.imgur.com/W9JtEBD.png)
- optimistic / admissible heuristics slow down bad plans, but never outweigh true costs -> ensure A* optimality

## admissible heuristics
- a heuristic h is admissible (optimistic) if: $0 \leq h(n) \leq h^*(n)$ 
	- $h(n)$: heuristic function
	- $h^*(n)$ : actual cost to nearest goal
- example: [[manhattan's distance]], pancake flipping (# of the largest pancake still out of place)
- most of what involved in A* is brainstorming *admissible heuristics*

## why a-star tree search is optimal with admissible heuristic
### to prove optimality
- assume A is optimal goal node, B is suboptimal goal node, h is admissible
- Prove: A will exit the fringe before B  = we will explore optimal node before suboptimal ones
### proof:
- imagine B on the fringe; ancestor n of A (or A itself) on the fringe
- claim: n will be expanded before B 
	1. $f(n) \leq f(A)$ 
		- <u>things to remember:</u> n: a node on the path to A; A: goal node
		- <u>analysis:</u> As A is goal node, $h(A) = 0$ $\Leftrightarrow$ $g(n) + h(n) \leq g(A)$, or the total cost through n to the goal node is smaller or equal to the estimated cost through A to the goal node. 
			- This is because $g(n) \leq g(A)$ (equal when n = A)
			- $h(n) \leq h^*(n)$: or the heuristic through n to the goal node has to be smaller or equal to the actual cost through n to the goal node
		- $\Leftrightarrow f(n) \leq g(A)$
		- $\Leftrightarrow g(A) = f(A)$ as $h(A) = 0$
		- $\Leftrightarrow f(n) \leq f(A)$
 
	2. $f(A) < f(B)$
		- $g(A) < g(B)$: as A is optimal goal node, B is suboptimal goal node
		- $f(A) < f(B): h = 0$ at both goal states
	3. n expands before B: as of 1 and 2 => $f(n) \leq f(A) < f(B)$ => $f(n) < f(B)$
- Therefore, all ancestors of A expand before B
- A expands before B
- **A* search with admissible heuristic** is optimal

## creating admissible heuristics
- inadmissible heuristics are often useful (find fast solution)
- Way to ensure admissibility in heuristics: introduce new actions
	- take original problem -> add new actions -> in this hypothetical problem space, we find the optimal solution
	- as this is hypothetical, there are more actions available -> optimal solution in this hypo space will be cheaper or same as in the real world
	- => often, admissible heuristics are solutions to relaxed problems, where new actions are available
	- => optimal solution in relaxed problem = admissible heuristic for real problem
- <u>note</u>: **A* with heuristic is the trade-off between quality of estimate and work per node**
	- as heuristic get closer to the true cost, you will *expand fewer node* (quality of estimate is better), yet we will have to *do more work per node* to compute the heuristic
