---
time: 
tags: 
child:
---
## what is a heuristic
- **Heuristic Function**: Estimates how close a state is to a goal, designed for specific search problems; a direction among multiple directions presented, to give a sense of the shortest path to the goal
- **Examples**: Manhattan distance ($Manhattan(x1, y1, x2, y2) = |x1 −x2|+|y1 −y2|$), Euclidean distance for pathing
- [pic - wo heuristic](https://i.imgur.com/4axucdo.png)
- [pic - w heuristic](https://i.imgur.com/eF0FC3v.png): heuristic: the number of the largest pancake that is still out of place
- P(v) = dist(v) + h(v)
	- priority for PQ = dist + heuristic -> total path length -> have to minimize this
- ![](https://i.imgur.com/yhWTAyP.png)
	- start node: 90