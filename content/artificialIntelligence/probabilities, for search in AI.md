---
time: 
tags: 
child:
---
## prob
- A random variable represents an event whose outcome is unknown  
- A probability distribution is an assignment of weights to outcomes  
- Example: Traffic on freeway  
	- Random variable: T = whether there’s traffic  
	- Outcomes: T in {none, light, heavy}  
	- Distribution: P(T=none) = 0.25, P(T=light) = 0.50, P(T=heavy) = 0.25  
- Some laws of probability (more later):  
	- Probabilities are always non-negative  
	- Probabilities over all possible outcomes sum to one  
- As we get more evidence, probabilities may change:  
	- P(T=heavy) = 0.25, P(T=heavy | Hour=8am) = 0.60  
	- We’ll talk about methods for reasoning and updating probabilities later

## expectation
- probability * outcome
- The expected value of a function of a random variable is the average, weighted by the *probability distribution* over *outcomes*

## what probability to use
- In expectimax search, we have a probabilistic model of how the opponent (or environment) will behave in any state  
	- Model could be a simple uniform distribution (roll a die)  
	- Model could be sophisticated and require a great deal of computation  
	- We have a chance node for any outcome out of our control: opponent or environment  
	- The model might say that adversarial actions are likely!  
- For now, *assume each chance node magically comes along with probabilities* that specify the distribution over its outcomes