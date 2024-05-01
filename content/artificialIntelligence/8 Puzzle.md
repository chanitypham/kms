---
time: 2024-03-23T10:15:00
tags: 
child:
---
## 8 puzzle
- [pic](https://i.imgur.com/r2vzo5r.png)
## 8 puzzle 1
- [pic](https://i.imgur.com/jAsuRMV.png)
- heuristic: # of tiles misplaced
- admissible? Yes, as every misplaced tiles has to undergo an action => minimum # of action = # titles misplaced. => This is an underestimation of the actual cost, as every misplaced titles has to undergo a series of actions, not just 1 action
- h(start): 8 = # of tiles misplaced at the start state
- => this is relaxed problem heuristic
## 8 puzzle 2
- [pic](https://i.imgur.com/xotiGOr.png)
- heuristic: sum of the manhattan's distance
- relaxed problem? yes, as you can slide the tiles just like when there are no other tiles.
- admissible? yes, as each tile has to go through > than the heuristic cost when there are other tiles around
- h(start) = sum of total manhattan's distance of each tile from the start state to the goal state (when there are no other tiles)
	- with 1: dist = 3
	- with 2: dist = 1
	- with 3: dist = 2
	- with 4: dist = 2
	- with 5: dist = 2
	- with 6: dist = 3
	- with 7: dist = 3
	- with 8: dist = 2
	- => h(start) = 3+1+2+2+2+3+3+2 = 18
## 8 puzzle 3
- using actual cost as heuristic
- admissible? Yes, $h(x) = h^*(x)$ -> still satisfy
- save on nodes expanded? Yes
- what's wrong -> we dont know the actual cost :D
