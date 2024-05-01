---
time: 
tags:
  - computerScience/DSA/a-starSearch
child:
  - "[[admissible heuristics]]"
---
## what is A* search
- Uniform-cost orders by path cost, or backward cost g(n)
- Greedy orders by goal proximity, or forward cost h(n)
- combination of UCS and greedy -> Orders by the sum of backward cost ( g(n) ) and forward cost ( h(n) ): $\\(f(n) = g(n) + h(n)\\)$ -> A*

## A* search optimality
- Tree search: 
	- A* is optimal if we have [[admissible heuristics]], inadmissible (pessimistic) heuristic -> not optimal
	- UCS is a special case (h=0)
- Graph search
	- A* is optimal if we have [[consistent heuristics]]
	- UCS optimal (h = 0 is consistent)
- consistency implies admissibility
- most natural admissible tend to be consistent, esp. in relaxed problems

## should stop when enqueue a goal?
- No, as it may not be the most optimal solution -> only stop when dequeue a goal

## A* vs other searches
- [a* vs ucs pic](https://i.imgur.com/4pWc1Ww.png)
- UCS: search widely just like BFS; in contours map: expand equally in all directions
- A*: zone in to search for optimal path (with good heuristic); in contours map: expand mainly toward the goal to ensure optimality
- [a* vs greedy vs ucs pic](https://i.imgur.com/JtsXzp6.png)

## A* application
- Video games
- Pathing / routing problems
- Resource planning problems
- Robot motion planning
- Language analysis
- Machine translation
- Speech recognition
- Graph Matching