---
time: 
tags: 
child:
---
## what is iterative deepening
- Idea: get DFS's space advantage with BFS's time / shallow-solution advantages
- Run a DFS with increasing depth limit
- Not wastefully redundant, most work in lowest level
- Properties:
	- Time complexity: $\\(O(b^s)\\)$
	- Space complexity:  $\\(O(bs)\\)$
	- Complete: yes
	- Optimal: only if costs are all 1
- [visualization](https://i.imgur.com/aYVZLfm.png)
