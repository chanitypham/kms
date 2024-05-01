---
time: 
tags: 
child:
---
## problem with search tree
- it is prone to expand repetitive nodes, [pic](https://i.imgur.com/j2u6NbC.png)
- graph search -> keep track of list of expanded nodes, not expand them again

## graph search
- Idea: never expand a state twice
- Implementation:
	- Tree search + set of expanded states (“closed set”)
	- loop through every node in the tree
		- if its state was expanded before -> skip it
		- if new -> add to the “closed set”
- Important: store the closed set as a set, not a list (sets, in many languages like python, are implemented as *hash tables -> faster look up time* than list)
- Completeness? Yes, as we just remove the repetition in the search tree, so basically nodes all are searched, but not repeated
- Optimal? Maybe not
	- only optimal if we already searched the optimal states, then when searching others, we remove the stated searched. else, we may never optimally searched
	- [example of a* graph search gone wrong](https://i.imgur.com/RL8gzat.png)
	- underlying issue? poor choice of heuristic -> misled us to the suboptimal path -> we need more than admissible heuristic => [[consistent heuristics]]
