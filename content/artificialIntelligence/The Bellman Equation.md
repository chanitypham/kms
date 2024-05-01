---
time: 2024-04-04T09:29:00
tags:
  - computerScience/AI-ML/RL
child:
---
## Optimal Quantities
- The value (utility) of a state s:
	- $V^{*}(s)\stackrel{\mathrm{\Large~}}{=}max_a Q^{*}(s,a) = max_a \sum_{s^{\prime}}T(s,a,s^{\prime})\left[R(s,a,s^{\prime})+\gamma V^{*}(s^{\prime})\right]$
	- expected utility starting in s and acting optimally
- The value (utility) of a q-state (s,a)
	- $Q^{*}(s,a)=\sum_{s^{\prime}}T(s,a,s^{\prime})\left[R(s,a,s^{\prime})+\gamma V^{*}(s^{\prime})\right]$
	- expected utility starting out having taken action a from state s and (thereafter) acting optimally
- The optimal policy:
	- 𝝿*(s) = optimal action from state s
- ![300](https://i.imgur.com/aORCIZJ.png)

## Time limited values
- define $V_k(S)$ to be the optimal value of s if the game ends in k more time steps = what a depth-k expectimax give from s