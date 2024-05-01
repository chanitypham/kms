---
time: 
tags: 
child:
---
## what is fringe strategies
- all search algorithm are the same, except for fringe strategies
	- **Fringe Strategies**: Each search algorithm systematically builds a search tree and chooses an ordering for the fringe. The difference lies in how they prioritize or order these unexplored nodes
	- implemented with priority queues
	- Practically, for DFS and BFS, you can avoid the log(n) overhead from an actual priority queue, by using stacks and queues
	- Can even code one implementation that takes a variable queuing object