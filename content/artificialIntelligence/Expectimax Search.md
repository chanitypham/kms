---
time: 2024-04-04T05:14:00
tags:
  - computerScience/AI-ML/optimization
  - computerScience/searchProblems
  - "#computerScience/gameTheory"
child:
---
## expectimax search
- Why wouldn’t we know what the result of an action will be?  
	- Explicit randomness: rolling dice, tossing a coin
	- Unpredictable opponents: the ghosts respond randomly  (teleport, etc)
	- Actions can fail: when moving a robot, wheels might slip  
- Values should now reflect *average-case (expectimax)* outcomes, not *worst-case (minimax)* outcomes
- **Expectimax search**: compute the *average score* under *optimal play* (maximize what we get on average when playing many times)
	- Max nodes as in minimax search  
	- Chance nodes are like min nodes but the outcome is uncertain  
	- Calculate their expected utilities  
	- I.e. take weighted average (expectation) of children  
	- optimality? 50/50 chance -> not completely sure 
	- assumptions on the selection can be mismatched with the world
- formalize the underlying uncertain result problems as [[Markov Decision Processes - MDP]]

## expectimax pseudocode
- [expectimax pseudocode](https://i.imgur.com/PTiKHLh.png)

## expectimax pruning
- cant do the same pruning, as there can be hugely large values dominating the others, affecting the expectation -> if prun -> misleading result

## depth-limited expectimax
- as cant get to the bottom in the time we have -> stop at some move, use est of the value (approx evaluation function)
- dont need to go deep in the tree -> in a reasonable amount of time -> find approx answer to the top

## quiz - should we use expectimax
- [quiz - what tree search to use](https://i.imgur.com/UR0vSiB.png)

## problems w expectimax
- infinite horizons -> expectimax needs finite
- self-loop
-  large search tree -> lots of computation