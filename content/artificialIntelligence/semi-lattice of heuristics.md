---
time: 
tags: 
child:
---
## what is semi-lattice structure, comparison with tree
- [[semi-lattice structure]]
## purpose of semi-lattice of heuristic
- understand relationships between different heuristics
- guide the selection of the most appropriate heuristics
- [pic of semi-lattice of heuristic](https://i.imgur.com/8EqD4VW.png)
## comparing dominance
- to see if 1 heuristic is dominant than the other
- Dominance: $h_a \geq h_c$ if:
	- $\forall n: h_a(n) \geq h_c(n)$
	- this can tell us if both $h(a)$ and $h(c)$ is admissible (never overestimate the true cost), $h(a)$ is better as it is closer to the actual cost => more efficient search
	- not all heuristic can be compared this way, sometimes they have lower and higher node, and can be in the same ranking
## better heuristics formed from 2 heuristics
- if have 2 heuristics, compare dominate btw them, and take the max => the max will be admissible and informative than either of these 2
- $h(n) = max(h_a(n), h_b(n))$