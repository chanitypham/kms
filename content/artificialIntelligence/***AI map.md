---
mindmap-plugin: basic
time: 
tags:
---
# Lectures
## Chapter 1: Introduction
- [[the importance of AI]]
- [[what is AI]]
- [[the different approached to AI]]

## Chapter 2: Intelligent Agents
- [[definition of an agent]]
- [[the structure of agents]]
- [[learning agents]]
---
## Lecture 2: Agents and Search
- [[options to design an AI agent]]
- [[designing rational agents]]
	- [[reflex agent]]
	- [[planning agent]]
- [[search problems]]
- [[state space]]
- [[state space graph vs search tree]]
	- [[state space graph]]
	- [[search tree]]
- [[search algorithm]]
	- [[tree search algorithm]]
	- [[depth-first search - dfs]]
	- [[breadth-first search - bfs]]
	- [[iterative deepening]]
	- [[cost-sensitive search]]
	- [[uniform cost search - ucs]]
## Lecture 3: Informed Search
- search so far
	- [[search problems]]
	- [[search tree]]
	- [[search algorithm]]
- [[pancake problem]]
- [[fringe strategy - the one queue]]
- [[uniform cost search - ucs]]
- [[search heuristics]]
- [[greedy search]]
- [[a* search]]
- [[admissible heuristics]]
	- [[manhattan's distance]]
	- [[8 Puzzle]]
	- [[semi-lattice of heuristics]]
- [[graph search]]
- [[consistent heuristics]]
## Lecture 4 + 5: CSPs
- To solve [[search problems]], we have assumptions about the world of the problem: 
	- a single agent
	- deterministic actions
	- fully observed states
	- discrete state space
- search so far is for **planning problem**, concerning sequences of actions
	- path to goal is important
	- paths have various costs, depths
	- heuristics give problem-specific guidance
- another search problem is **identification problem**: assignments to variables
	- goal is important, not the path
	- all paths have same depth (for some formulations)
	- CPS - specialized class of identification problems -> have more 
- [[constraint satisfaction problems]]
	- [[examples of constraint satisfaction problems]]
- [[constraint graphs]]
	- [[The Waltz Algorithm]]
	- [[Standard Search Formulation of CSPs]]
- [[search methods for CSPs]]
	- [[backtracking search]]
		- [[filtering in CSPs - forward checking, arc consistency]]
		- [[k-consistency]]
		- [[ordering in CSPs - minimum remaining values, least constraining value]]

## Lecture 6: Search with Other Agents I
- types of games: many
	- axes
		- Deterministic or stochastic?
		- One, two, or more players?
		- Zero sum?
		- Perfect information (can you see the state)?
	- want algo to calculate strategy (policy) recommending a move from each state
	- [[deterministic games]]
	- [[zero sum games]]
	- value of a state: V(s) = maximum value of the child nodes s' of s
## Lecture 7: Search with Other Agents II - Uncertainty & Utility
- worst-case vs average case: Uncertain outcomes controlled by chance, not an adversary!
	- up triangle: maximizer
	- down triangle: minimizer
	- circle: chance node
- [[Expectimax Search]]
- [[probabilities, for search in AI]]
- [[the dangers of optimism and pessimism in model assumptions]]
- mixed layer game types
	- [[Expectiminimax]]
	- [[multi-agent utilities]]
- [[monte carlo tree search]]
- summary
	- ﻿﻿Games require decisions when optimality is impossible
		- ﻿﻿Bounded-depth search and approximate evaluation functions
	- ﻿﻿Games force efficient use of computation
		- ﻿﻿Alpha-beta pruning, MCTS
	- ﻿﻿Game playing has produced important research ideas
		- ﻿﻿Reinforcement learning (checkers)
		- ﻿﻿Iterative deepening (chess)|
		- ﻿﻿Rational metareasoning (Othello)|
		- ﻿﻿Monte Carlo tree search (chess, Go)
		- ﻿﻿Solution methods for partial-information games in economics (poker)

## Lecture 8: Markov Decision Processes MDP
- what's next beyond search
	- search: calculate what to do in current situation
- MDP is looking at learning habits/reflexes
	- pre-calculate what to do for any situation
	- [[Markov chain]]
- [[Markov Decision Processes - MDP]]
	- [[utility of sequences in MDP]]
	- [[The Bellman Equation]]


# Quiz
## Quiz 2
- [[quiz 2 AI]]
# Homework
## Homework 1
- [[COMP2050 Homework 1]]
- [[COMP2050 Homework 2]]


---





















## Lec