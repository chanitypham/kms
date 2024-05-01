---
time: 2024-04-04T05:10:00
tags:
  - Math/probability/markovChain
  - computerScience/AI-ML/RL
child:
---
## Markov Decision Processes - MDP
An MDP is defined by:
- A set of states s ∈ S
- A set of actions a ∈ A
- A transition function T(s, a, s’)
	- Probability that a from s leads to s’, i.e., P(s’| s, a)
	- Also called the model or the dynamics
- A reward function R(s, a, s’)
	- Sometimes just R(s) or R(s’)
- A start state
- Maybe a terminal state
- Usually denoted as tuple $〈S, A, T, R, 𝛄〉$

- Markov in MDP means action outcomes depend only on the current state (just like successor function of search)
- utilities of sequences
	- more reward, now -> values of rewards decay exponentially $U\longrightarrow\,{\cal P}_{0}\ +\ \gamma{\cal P}_{1}\ \ +\ \gamma^{2}\,{\cal P}_{2}+ \cdots$ 

## policies in MDP
- in deterministic single-agent search problems: want optimal plan / sequence of actions from start to goal
- in MDP: want optimal policy $\pi^*: S \rightarrow A$ 
	- a policy p gives an action for each state
	- optimal policy: maximize expected utility if followed (can have many optimal policies, but will receive same amt of rewards in the long run)
	- explicit policy defines a reflex agent
- [[Expectimax Search|expectimax]] didnt compute entire policies
	- only the action for a single state
### example
Consider a simple MDP where an agent is navigating a gridworld. The states (S) are the cells of the grid, the actions (A) are the directions the agent can move (up, down, left, right), and the rewards are +1 for reaching the goal cell, -1 for hitting a trap, and -0.01 for each step to encourage the agent to reach the goal quickly.

A policy in this case might be a simple rule like “always move towards the goal if possible, otherwise move randomly”. This policy gives an action for each state (each cell of the grid).

An optimal policy (𝛑*) would be the one that maximizes the expected utility. This might involve taking a longer path to avoid traps, for example.

The Expectimax algorithm could be used to decide the best action for a single state. For example, if the agent is in a particular cell, Expectimax could be used to decide whether it’s better to move up, down, left, or right, based on the expected utility of each action. However, Expectimax wouldn’t provide a policy for the other cells of the grid.

## MDP Search Tree
- ![400](https://i.imgur.com/zQmUWdw.png) [link](https://i.imgur.com/zQmUWdw.png)
- MDP search tree
	- Each MDP state projects an expectimax-like search tree
- Problems
	- Repeated states
	- Tree goes on forever
	- => [[The Bellman Equation]]