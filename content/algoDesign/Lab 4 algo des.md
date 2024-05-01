---
time: 
tags: 
child:
---
## Question 1:
We can use the Prim's algorithm to find the Minimum Spanning Tree
1) Pick the edge with minimum weight from the edges set; for example, we pick edge (0,1) with weight 2
2) Repeatedly picking edges with weight 2, we will result in $[(0,1), (1,2), \cdots, (n-1,n)]$ with nodes $[0,1,2,\cdots]$ 
3) Our minimum spanning tree then will have the weight of $\sum_{i=1}^{n}2|i-(i-1)| = 2n$

## Question 2:
- Approach: 
	- Finding maximum vehicle height using modified Prim's algorithm.
- Algorithm Steps:
	1. Sort edges by weight (descending).
	2. Repeat until all nodes are explored: 
		a. Select edge with maximum weight $d$
		b. Determine maximum allowable height at the intersection $d$
		c. Mark other end of road (nodes) as explored 
- Algorithm Characteristics:
	- Time complexity: O(Blog V)
	- Space complexity: O(B + V)

## Question 3: 
- Greedy: At each step, the algorithm chooses the two symbols with the lowest frequencies, without considering their future impact on the encoding of other symbols.
- Optimal substructure: Huffman coding constructs an optimal prefix code by recursively merging the two least frequent characters into a single node. This process repeats until a single root node remains. The efficiency of this method is due to Huffman coding’s optimal substructure property.

## Question 4:
- ![400](https://i.imgur.com/odABqni.png)
- ![400](https://i.imgur.com/f9CNbiu.png)
- ![400](https://i.imgur.com/Q3W6LfK.png)
8) `aaaaaaaabbbbccccddee`-> **`00000000100100100100101101101101110110111111`**
