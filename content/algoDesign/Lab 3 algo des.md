---
time: 
tags: 
child:
---
# Theory
## Question 1:
- The proposed solution of iteratively choosing the position to build new stations, maximizing the number of new towns covered, is not necessarily optimal. 
- Example:
	+ Consider a scenario where the towns along the railroad path are arranged in a zigzag pattern
	+ The algorithm starts by selecting the first town and building a train station at that position
	+ As it iterates through the towns, it will continue to build train stations at every other town, alternating between the upper and lower positions
	+ => This approach may result in a higher number of train stations being built compared to an optimal solution
+ An optimal solution would identify that building train stations only at the upper or lower positions, rather than both, can cover all the towns within the required distance D
+ By selecting the upper or lower positions strategically, the optimal solution can achieve the same coverage with fewer train stations

## Question 2:
- The workers have 2 actions: load package on current truck or let current truck go and load on new truck
- Current procedure: load each truck to full capacity before moving to next truck
+ Case 1: Package is too big for current truck - no difference between company's solution and optimal solution
+ Case 2: Package can fit in current truck - company's solution always loads on current truck, optimal solution may load on next truck
+ If both solutions have same actions up to a point, optimal solution will use one more truck than company's solution. So if number of packages loaded is the same, but optimal solution uses one more truck => not actually optimal
=> Company solution is optimal

## Question 3:
- What makes Prim's algorithm "greedy"?
	+ The algorithm makes the optimal choice at each iteration by selecting the shortest edge that connects a vertex outside the tree to a vertex in the tree.
- Time and space complexity for Prim's algorithm:
	+ Time complexity: 
	    + O((n + m) log n), where n is the number of vertices and m is the number of edges in the graph
	    + Reason: The algorithm iterates through all vertices and their neighbors, and the priority queue operations take O(log n) time.
	+ Space complexity: 
	    + O(n), where n is the number of vertices
	    + Reason: The algorithm need to store all the edges of the graph (O(m)) and all vertices of the graph (O(n))
- Does Prim's algorithm always return the optimal solution:?
	+ Yes, Prim's algorithm always returns the optimal solution, which is the minimum spanning tree. This can be proven by showing that at each iteration, the algorithm selects the shortest edge that connects a vertex outside the tree to a vertex in the tree. By always choosing the shortest edge, the algorithm ensures that the total weight of the edges in the tree is minimized.

## Question 4
- The robot's algorithm finds a peak in a 2-D mountain range near its starting point
- However, it may get stuck in a local maximum and miss potentially taller global maximums
- In a 3D case, the algorithm needs to consider multiple angles with varying granularity, in which a smaller angle granularity leads to higher computational costs
- To improve the algorithm's performance, steps can be introduced where the robot moves towards the point determined by gradient descent
- The distance of each move determines the next step to consider
- For example, if going higher by gradient descent brings a 5-meter increase, the next steps will scan a larger distance around it (e.g., 1/5 meter further)
- This way, the robot considers a greater distance as it gets closer to its local maximum. And this approach may help the algorithm find the global maximum more efficiently.