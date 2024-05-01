---
time: 
tags: 
child:
---
# COMP2050 Homework 1
## Problem 1:
1. As in graph with negative weights, using UCS may not be optimal even though the algorithm will still be terminated. Therefore, Professor Khoa cannot find the optimal solution using UCS with negative energy. 
2. In the modified graph, where all edges are non-negative (assuming $\alpha = -1$), the optimal route can be found and the algorithm can terminate. However, the optimal path in the original graph, which may contain negative edges, could differ
3. No, it will be the same.

## Problem 2:
**Problem:** You are trapped in a large, complex maze garden and need to find the exit. The garden is represented as a 2D grid where open paths are denoted by ‘0’ and walls are denoted by ‘1’. The starting position is at the top-left corner (0,0) and the exit is at the bottom-right corner (n-1, m-1). There is also a branching factor, interpreted as the constraint on maximum number of directions you can traverse (i.e. left, right, up, down)

In this case, Depth-First Search (DFS) can be more efficient than Breadth-First Search (BFS) as:
1. **Path Length & Branching Factor** DFS is a better choice if the solution is expected to be far from the root. In this problem problem, if the exit is known to be far from the entrance, DFS could reach the solution faster because it explores a complete path to the end before backtracking.
2. **Space Complexity:** DFS uses less memory than BFS. In the worst-case scenario, BFS needs to store all nodes in memory, while DFS only needs to store some paths from the root to a leaf node, along with siblings of each node on the path

In general, DFS is usually better than BFS in problems where:
- The tree/graph is known to have a large breadth (i.e., each node has many children)
- The solution is expected to be deep in the tree/graph and not located in the higher levels
- Space is a matter of concern, as DFS has lower memory requirements than BFS

## Problem 3:
- **State**: A tuple $(a, b, c)$
	- a represents the water in the 5L jar
	- b represents the water in the 8L jar
	- c represents the water in the 12L jar
- **Successor Function**:
    1. **Fill**: Fill a jar from the source, changing the state to $(5, b, c)$, $(a, 8, c)$, or $(a, b, 12)$. The cost is the effort to fill
    2. **Empty**: Empty a jar, changing the state to $(0, b, c)$, $(a, 0, c)$, or $(a, b, 0)$. The cost is minimal
    3. **Pour**: Pour water between jars. The outcome depends on the current state. 
	- Example case: Pouring from the 5L to the 8L jar: 
		- if $b+a \leq 8$, results in $(0, b+a, c)$ 
		- if $b + a > 8$, results in $(a−(8−b), 8, c)$
	- The cost is the transferred water amount
- **Initial State**: $(0, 0, 0)$
- **Goal State**: $(9, b, c); (a, 9, c); (a, b, 9)$

