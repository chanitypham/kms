---
time: 
tags: 
child:
---
## discounting of rewards
- **maximize** rewards **now** => values of rewards decay exponentially
- ![300](https://i.imgur.com/B0oIltY.png)
- $U = R_0 + \gamma R_1 + \gamma ^2 R_2 + \cdots$
- How to discount?
	- Each time we descend a level, we multiply in the discount once
- Why discount?
	- Helps our algorithms converge
	- Uncertainty about the future may not be fully represented
	- If the reward is financial, immediate rewards may earn more interest than delayed rewards
	- Animal/human behaviour shows preference for immediate reward

- Infinite Utilities: solution to game lasting forever, resulting in infinite rewards (esp when rewards are positive): 
	- **finite horizon** (similar to depth-limited search)
		- Terminate episodes after a fixed T steps (e.g. life)
			- For example, if we’re modeling a robot’s actions in a warehouse, we might decide to only look 100 steps into the future
			- The utility of a state is then the sum of the rewards for the next 100 steps.
		- Gives non-stationary policies (𝝿 depends on time left)
			- when using finite horizon -> policies become non-stationary (can change over time)
			- eg. when using finite horizon of 100 steps
				- Early in the horizon, it prioritizes actions that lead to long-term rewards (e.g., reaching distant packages).
				- As the horizon approaches, it becomes more focused on immediate rewards (e.g., delivering nearby packages).
	- **Discounting**:
		- use $0 < \gamma < 1$
		- $U([r_{0},\cdot\cdot r_{\infty}])=\sum_{t=0}^{\infty}\gamma^{t}r_{t}\leq R\mathrm{max}/(1-\gamma)$ 
	- **Absorbing state**: 
		- guarantee that for every policy, a terminal state will eventually be reached (like “overheated” for racing)