---
time: 2024-03-04T08:44:00
tags:
---
## Propose-and-Reject (Gale-Shapley) Algorithm
- ![](https://i.imgur.com/IMC89jd.png)
- ![](https://i.imgur.com/C5N481r.png)

## theoretical explanation
1. everybody (all those from the 2 sides) submit their preference list, ranking the other side
2. 1st side choosing other people of the 2nd side. those of 2nd side with many selections will reject all but their top suitors. Those who match will form a tentative pair
3. each 1st side people rejected then propose the their next rank choices (whether their choices are free or not). 1st side and 2nd side people, forming the previously tentative pair, can reconsider and make new pair
4. iterate step 1-3
- example
	- ![](https://i.imgur.com/SRkxqMo.png)

## implementation
- https://youtu.be/o1olHmxDzTw?si=3RDuvAHrLQ2X374L 

## algorithm analysis
- termination guaranteed? -> Yes, at most $n^2$ proposals/rounds of the algorithm
	- n men, in worst case, each man has to propose to n women in order to find a match => $n^2$
- everyone gets a match guaranteed? -> Yes
	- ![](https://i.imgur.com/5yWpaUw.png)
- result allocation guaranteed stable? -> Yes