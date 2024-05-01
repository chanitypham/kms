---
time: 
tags: 
child:
---
## note
- Strategy: expand a shallowest node first
- Implementation: fringe is a FIFO queue
- Properties:
	- Time complexity: $O(b^s)$
		- s tiers -> there will be s nodes of b in the worst case time
	- Space complexity: $O(b^s)$
	- Complete: yes
	- Optimal: only if costs are all 1
- ![](https://i.imgur.com/FIK2NSv.png)

## BFS in CSPs
- choose a node as root, then explore level by level
- eg. level 0, tree node is WA, child node is WA = R, WA = G, WA = B
	- level 1, child node is WA = R and SA = G, WA = G and NT = R, .....
- it falls into the worst case: explore the deepest level to find the solution