---
time: 
tags: 
child:
---
## 1-consistency - node consistency
- Increasing degrees of consistency
	- **1-Consistency (Node Consistency)**: Each single node’s domain has a value which meets that node’s unary constraints (constraint on 1 variable
		- eg. node A,B,C can take a value in $\{1,2,3,4,5\}$, and $A > 1$ => $A \in \{2,3,4,5\}$ will make A consistent
	- **2-Consistency (Arc Consistency)**: For each pair of nodes, any consistent assignment to one can be extended to the other 
		- eg. given constraint $A ≠ B$. if we assign the value 1 to A (A=1), we can find a value for B (B=2 or 3 or 4 or 5) that satisfies the constraint $A ≠ B$, and vice versa, there is a value in A’s domain that satisfies the constraint $A ≠ B$
		- => arc from A to B is consistent. same for B to C and C to A
	- **K-Consistency**: For each k nodes, any consistent assignment to k-1 can be extended to the k-th node.
		- if we assign the values 1 and 2 to A and B respectively (A=1, B=2), we can find a value for C (C=3) that satisfies the constraints A ≠ C and B ≠ C. Therefore, the set of nodes {A, B, C} is 3-consistent.
- Higher k more expensive to compute
	- must check more combinations of assignments
	- is easier to find a solution (they eliminate inconsistency)
- (You need to know the k=2 case: arc consistency)
