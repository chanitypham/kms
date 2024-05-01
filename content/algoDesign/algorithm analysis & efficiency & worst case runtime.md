---
time: 
tags: 
child:
  - "[[big-o notation]]"
  - "[[big-omega notation]]"
  - "[[big-theta notation]]"
---
## what is algorithm analysis
- study to estimate the resources an algorithm used to solve a specific problem, i.e. calculating efficiency
- does not give exact values (eg. time, space, v.v), but help to study the behavior and estimate efficiency of the algo

## what is efficiency in algorithm
- related to the input length - time complexity, or volume of memory - space complexity
- why care about efficiency: there are many approaches to solve problem. Algo analysis is then to figure out what is **the most optimal** solution
	- eg. airbag in cars are programmed to open within 2s (for eg), if it takes longer -> cant protect the driver

## what is time complexity
- a computational way to show how runtime of an algo changes as the input size changes

## why measure using worst case analysis - WCA
- purpose of worst case running time: what if an algo performs well on most cases except for some very slow running case?
- WCA is considered most efficient in analyzing algo
	- as for eg average-case analysis, where we study the performance of an algorithm over random instances -> what is random? How to choose unbiased random
	- real input is not also a random distribution -> average case analysis tells more about mean performance of an algorithm rather than the comprehensive performance of the algorithm. 

## benchmark of WCA to determine algo efficiency
- compare with brute force search (checking all possible cases)
- algo is efficient if achieves better worst case performance than brute force search
- brute force is not good as
	- too slow to be useful
	- intellectual cop-out, provide nothing into the structure of the problem we are studying
- algo improving brute force search nearly always contain a valuable heuristic idea (shortest straight path to the goal) + computational tractability (ability to calculate)
- algo is efficient if it has polynomial running time
	- polynomial types: 
		- Constant (degree 0)
		- Linear (degree 1)
		- Quadratic (degree 2)
		- Cubic (degree 3)
		- and so on
- ![](https://i.imgur.com/1tiXPtW.png)

## asymptotic analysis
- method of defining mathematical boundaries of an algo's run-time performance -> estimate [[algorithm analysis & efficiency & worst case runtime#what is time complexity|time complexity]] function for arbitrarily large input
- can estimate the average case, best case, and worst case scenario of an algorithm
## common asymptotic notations
- constant time: O(1)
- linear: O(n)
- logarithmic: O(log n)
- quadratic: O(n^2)
- cubic: On(n^3)
- and so on 
- **order**: $\\(1<\log(n)<s\mathrm{qr}(n)<n<n\times\mathrm{log}(n)<n^{2}<n^{3}<....<n^{n}\\)$ 
- **note**: remove all constants. eg. O(n/2) -> O(n)