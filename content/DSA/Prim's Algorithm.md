---
cards-deck: 2. Growth::AY2S2::DSA
---
## Context
- Time: 06 04 2024 - 21:55
- Tags: #computerScience/DSA/tree/MST 
- Child: 
- Source: 
## Definition of Prim's Algorithm #fc
- Starts to build the MST from any vertex in the graph.
- Maintains two sets of vertices. The first set contains the vertices already included in the MST, the other set contains the vertices not yet included.
- At every step, it considers all the edges that connect the two sets and picks the minimum weight edge from these edges.
- After picking the edge, it moves the other endpoint of the edge to the set containing MST.
- Gives connected component and works only on connected graph.
- Traverses one node more than one time to get the minimum distance.
- Time complexity is O(V^2), which can be improved up to O(E log V) using Fibonacci heaps.
- Runs faster in dense graphs
^1712415352336
## Difference with [[Kruskal's Algorithm]] #fc
|Prim’s Algorithm|Kruskal’s Algorithm|
|---|---|
|It starts to build the Minimum Spanning Tree from any vertex in the graph.|It starts to build the Minimum Spanning Tree from the vertex carrying minimum weight in the graph.|
|It traverses one node more than one time to get the minimum distance.|It traverses one node only once.|
|Prim’s algorithm has a time complexity of O(V2), V being the number of vertices and can be improved up to O(E log V) using Fibonacci heaps.|Kruskal’s algorithm’s time complexity is O(E log V), V being the number of vertices.|
|Prim’s algorithm gives connected component as well as it works only on connected graph.|Kruskal’s algorithm can generate forest(disconnected components) at any instant as well as it can work on disconnected components|
|Prim’s algorithm runs faster in dense graphs.|Kruskal’s algorithm runs faster in sparse graphs.|
|It generates the minimum spanning tree starting from the root vertex.|It generates the minimum spanning tree starting from the least weighted edge.|
|Applications of prim’s algorithm are Travelling Salesman Problem, Network for roads and Rail tracks connecting all the cities etc.|Applications of Kruskal algorithm are LAN connection, TV Network etc.|
|Prim’s algorithm prefer list data structures.|Kruskal’s algorithm prefer heap data structures.|
^1712415352340
