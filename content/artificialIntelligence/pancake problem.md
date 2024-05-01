---
time: 
tags: 
child:
---
## note
- [pic](https://i.imgur.com/3iGtqAM.png)
- [pic - tree search to get solution to pancake problem](https://i.imgur.com/laS7SLA.png)
	- initialize the search tree, initial state in the fringe
	- loop to explore nodes in the fringe
		- if the initial state is not the goal state
			- if there are no candidates can be added to the fringe -> return failure
			- else: choose a leaf node, expand on strategy
			- if node contains a goal state -> return solution
- total space graph is 4! = 4 (ways to choose the bottom layer) * 3 (ways to choose 3rd layer) * 2 (ways to choose 2nd layer) * 1 (way to choose the top layer) = 24
- **Action and Cost**: Flipping pancakes with a cost associated with the number of pancakes flipped.
- **Path to Goal**: Sequence of flips leading to the goal with a total cost.
- [heuristic: # of largest pancake still out of place](https://i.imgur.com/KK9ZX0G.png)
	- 
