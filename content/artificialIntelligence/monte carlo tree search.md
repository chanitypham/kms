---
time: 
tags: 
child:
---
## MCTS
- developed for the purpose of playing Go, with large branching factor b > 300
- alpha beta search assume a fixed horizon can reach ~ b > 4
- combine 2 important ideas:
	- **[[Evaluation by rollouts - monte carlo tree search]]** – play multiple games to termination from a state s (using a simple, fast or random policy) and count wins and losses  
		- win a lot: state s is good, else, is bad
	- **Selective search** – explore parts of the tree that will help improve the decision at the root, regardless of depth
		- abandon the idea of fixed horizon

## MCTS version 0
- Do N rollouts from each child of the root, record fraction of wins  
- Pick the move that gives the best outcome by this metric 
- [mcts v0](https://i.imgur.com/tgvqqYX.png)
- [problem with mcts v0](https://i.imgur.com/ZCqlD2K.png)
	- keep searching even though we know that's a bad move -> 0/10

## MCTS version 0.9
- allocate rollouts to more **promising** & **uncertain** nodes
	- a tradeoff btw promising and uncertain
- [MCTS version 0.9](https://i.imgur.com/cCPNIvN.png)

## Upper Confidence Bounds - UCB heuristics
- UCB1 formula combines "promising" and "uncertain"
	- $U C B 1(n)={\frac{U(n)}{N(n)}}+C\times{\sqrt{\frac{\log N({\mathrm{PARENT}}(n))}{N(n)}}}$
- *N(n)* = number of rollouts from node n  
- *U(n)* = total utility of rollouts (e.g., # wins) for **Player(Parent(n))**  
	- Keep track of both for each node N(n)
- C: constant, depending on the stage of the game

## MCTS version 2.0: Upper Confidence of Trees - UCT
- Repeat until out of time:  
	- *Selection*: recursively apply UCB to choose a path down to a leaf node n  (i.e. from parent -> choose child -> grandchild -> ... -> leaf node)
	- *Expansion*: add a new child c to n   
	- *Simulation*: run a rollout from c  
	- *Backpropagation*: update U and N counts from c back up to the root  
- Choose the action leading to the child with highest N
- [pic - UCT example](https://i.imgur.com/521cs2d.png)

## why no min max
- “Value” of a node, U(n)/N(n), is a weighted sum of child values!  
- Idea: as N → ∞, the vast majority of rollouts are concentrated in the **best child(ren)**, so **weighted average → max/min**  
- Theorem: as N → ∞ selects the minimax move  
	- (but N never approaches infinity!)

