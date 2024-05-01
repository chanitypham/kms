---
cards-deck: 2. Growth::AY2S2::DSA
---

## Context
- Time: 06 04 2024 - 21:51
- Tags: #computerScience/DSA/tree/MST 
- Child: 
- Source: 

## Definition of Kruskal #fc
- definition
    - connected graph
    - weighted edge
    - result in a MST
- algo
    - pick the smallest edge
    - repeatedly look for the smallest edges that don’t create a cycle
	- [link](https://file.notion.so/f/f/41ea3df3-a3c8-4d94-a405-824c627a8a7c/de13fa20-58fe-4dea-b5b0-588b826ecdf1/Untitled.png?id=3257302b-fb8d-49eb-9b13-0dc035dacf34&table=block&spaceId=41ea3df3-a3c8-4d94-a405-824c627a8a7c&expirationTimestamp=1712534400000&signature=yjYPheTq_RswIlFogpH6OZHVm5Wo3nEMnnDmLwX_aVw&downloadName=Untitled.png)
    - CE → AB → AD → DF → FG
    - [link](https://file.notion.so/f/f/41ea3df3-a3c8-4d94-a405-824c627a8a7c/d204dce7-90d0-4b8f-aaa9-0d9bda0e2680/Untitled.png?id=1824dd64-4ffc-414a-89f2-825f9da21bdc&table=block&spaceId=41ea3df3-a3c8-4d94-a405-824c627a8a7c&expirationTimestamp=1712534400000&signature=9HeU5guJ940mQlKVd1O6V96OPR1UCRPq33RzTuHxpos&downloadName=Untitled.png)
    - merge sort: `O(ElogE)`
- algo2:
	- Starts to build the MST from the vertex carrying minimum weight in the graph.
	- Sorts all the edges in increasing order of their weight.
	- Picks the smallest edge and checks if it forms a cycle with the spanning tree formed so far. If not, it includes this edge. Else, it discards it.
	- Repeats the process until there are (V-1) edges in the spanning tree.
	- Can generate forest (disconnected components) at any instant and can work on disconnected components.
	- Traverses one node only once.
	- Time complexity is O(E log V), where E is the number of edges and V is the number of vertices.
	- Runs faster in sparse graphs.
^1712415360732

## [[Prim's Algorithm#Difference with Kruskal's Algorithm|Difference with Prim's Algo]] 
