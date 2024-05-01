## Problem 1:
- Variable: $V = \{X_1, X_2, X_3\}$
	- $X_1$: first student hired
	- $X_2$: second student hired
	- $X_3$: third student hired
- Domains: $D = \{Chinh, Duy, Quang, Jason, Hoang, Hieu, Phuc\}$
- Constraints:
	- $X_1 \neq X_2 \neq X_3$
	- 2 AI expertises: 
		- Prof Khoa has AI expertise, so at least 1 other must have AI expertise as well. 
		- $X_i$ with $i \in \{1,2,3\}$ should have AI expertise
		- Possible selections of AI: Chinh, Jason, Hieu 
	- 2 Front end:
		- Count of FE engineers among $X_1, X_2, X_3$ should be 2
		- Possible selections of FE: Chinh, Duy, Quang, Hoang, Phuc
	- 1 Photoshop:
		- Count of Photoshop among $X_1, X_2, X_3$ should be 1
		- Possible selections of Photoshop: Duy, Hoang, Phuc
	- 1 Back end: 
		- Count of BE engineers among $X_1, X_2, X_3$ should be 1
		- Possible selections of BE: Jason
	- 1 System:
		- Count of System engineers among $X_1, X_2, X_3$ should be 1
		- Possible selections of System: Quang, Hieu

## Problem 2
1. another choice can be
	- Variable:
		- $R_1$: Room where Duy is located
		- $R_2$: Room where Chinh is located
		- $R_3$: Room where Quang is located
		- $W_1$: weapon in room adjacent to Duy's room
		- $W_2$: weapon in room adjacent to Chinh's room
		- $W_3$: weapon in room adjacent to Quang's room
	- Domain:
		- Each variable $R_i, i \in \{1,2,3\}$ and $W_j, j \in \{1,2,3\}$ , can take values from set of 3 rooms and 3 weapons, which is $\{1,2,3\}$ respectively
2. Using the variables and domains already provided in part a, we have the constraint:
- $C \neq D \neq Q$
- $k \neq g \neq w$
- $D \neq w$
- $|C - g| = 1$
- $|Q - k| = 1$
- $D \neq 1, g \neq 1$

- Backtracking steps Table
	![](https://i.imgur.com/iHtvRmb.png)

## Problem 3
1. Minimax:
	![](https://i.imgur.com/Il0BDCl.png)

2. Alpha beta prunning
	![](https://i.imgur.com/xDZLx14.png)
