---
time: 
tags:
  - computerScience/searchProblems
child:
  - "[[tree search algorithm]]"
  - "[[depth-first search - dfs]]"
  - "[[breadth-first search - bfs]]"
---
## Properties of search algorithm
- complete: guaranteed to find a solution if one exists?
- optimal: guaranteed to find least cost path?
- time complexity?
- space complexity?
- [pic](https://i.imgur.com/VNyKp2G.png)
- Systematically builds a search tree
- Chooses an ordering of the fringe (unexplored nodes)
- Optimal: finds least-cost plans

## Cartoon of search tree:
- b: branching factor
- m: maximum depth
- s: depth of shallowest solution
- C*: cost of cheapest solution
- 𝜺: minimum arc cost
- Number of nodes in entire tree: $1 + b + b^2 + \cdots + b^m = O(b^m)$