---
time: 
tags: 
child:
---
Algorithm Design - Spring 2024
Pham Quynh Trang
V202200890

## Question 1:
- Algorithm
	- Iterate through nodes in sorted order
	- Remove each outgoing arc temporarily & check if resulting graph is a valid topological ordering (using the Topological Sort function)
	- If yes, arc can be removed; otherwise, restore it

## Question 2:
a) Maximizing Minimum Weight of Edge:
- Observations:
    - Determining the existence of a perfect matching in a graph is straightforward, regardless of edge weights.
    - Construct a graph $G(h)$ from $Kn,n$ using only edges with weights at least h.
    - The perfect matching, $M$, in $Kn,n$ maximizing the minimum edge weight contains exactly n edges.
    - If there's a perfect matching in $G(h)$, $M$ in $Kn,n$ must have a minimum edge weight $\geq h$
- Approach:
    - Find the largest possible h such that a perfect matching exists in $G(h)$, employing binary search
    - The perfect matching in $G(h)$ becomes the desired solution in $Kn,n$, maximizing the minimum edge weight

b) Maximizing Product of Chosen Edges' Weights
- Algorithm Choice: One option is to use Max-flow Algorithm
- Key Observation:
    - Utilize the property $log(a * b) = log(a) + log(b)$.
    - Convert the problem into finding a max-flow that maximizes the log-weight.
- Solution Approach: Apply the minimum-cost maximum-flow algorithm to discover the perfect matching maximizing the product of chosen edges' weights
    - The minimum-cost maximum-flow algorithm is a graph algorithm used to find the maximum flow in a network with minimum cost. It involves finding the optimal flow from a source to a sink while minimizing the total cost associated with sending the flow through the network.
    - Methods:
		- Represent the graph with edge weights as costs.
		- Apply the minimum-cost maximum-flow algorithm to find the maximum flow that minimizes the total cost, which in this case corresponds to maximizing the sum of logarithmic weights.
		- The resulting flow corresponds to the desired perfect matching, achieving the objective of maximizing the product of chosen edges' weights.
## Question 3:
- ![](https://i.imgur.com/VpC4aXx.png)
	a.  List of edges must be in the MST regardless of the missing cost values
	- Applying Kruskal algorithm, we will sort the edges in ascending order. => We have:
		- GH = 2 < BD = 3 < BC = 9 < AC = 10 < DC = 15 < AB = 20
		- If there are $> 4$ edges with cost $<= 2$, GH might not be chosen in the MST => GH is not a must choose edge
		- BD will then be chosen next or chosen after some edges have cost $<=3$. It will not be the last edge chosen, as it need at least 6 edges to connect vertices A, C, E, F, G, H and form MST. If we do not use BD, either AB or BC must be used to connect all vertices and form MST, in which each of these edges all cost more than BD => BD is a must choose edge
		- BC is not a must choose edge (as proven above)
		- Suppose that C has not been connected, it will either be connected by AC or BC as among all those known edge weights, AC < BC < DC. But BC is not an optimal selection => we choose AC => AC is a must choose edge to make sure it will go through all the nodes in optimal paths
	b. Edges cannot be added in the MST are AB and CD. As the Kruskal algorithm will always choose BD, BC, or AC before AB and CD. 

## Question 4:
- Goal: Determine existence of a simple cycle through edge $(s, t)$ with cost ≤ $\gamma$.
    - Find a simple path from t to s with minimum cost.
    - Use edge $(s, t)$ to form the cycle with minimum cost, including $(s, t)$.
- Distances:
    - Define $dist(t, s)$ as the minimum cost of the simple path from t to s.
    - Check if $dist(t, s) + cs,t ≤ \gamma$
- Procedure:
    - Find the minimum cost simple path from t to s.
    - Add the cost of edge $(s, t)$ to determine if the cycle satisfies the condition.
## Question 5:
- Initialization: Initialize a variable 'res' to a vertex, starting at 0. Eventually, 'res' might become the universal sink.
    - 'res' is set to a vertex, initially 0.
- Comparison:
    - Compare 'res' with each subsequent vertex to determine its potential as a universal sink.
    - If there's an edge from 'res' to the current vertex, update 'res' to the current vertex.
    - Otherwise, keep 'res' unchanged.
- Verification:
    - After the process, if only one vertex remains in 'res', it could be a universal sink.
    - Check if any other vertices have edges pointing towards this vertex.
        - If no such vertices exist, it's a universal sink.
        - Otherwise, it's not.