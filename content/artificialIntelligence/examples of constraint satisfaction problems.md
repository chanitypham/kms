---
time: 2024-03-26T15:40:00
tags: 
child:
---
## eg of CSP: map coloring
- [pic of map in australia](https://i.imgur.com/ZnFFDAu.png)
- Variables: different states (WA, NT, Q, NSW, V, SA, T)
- Domains: values to assign, D = {red, green, blue}
- Constraints: adjacent regions must have different colors
	- implicit: $WA \neq NT$
	- explicit: $(WA, NT) \in {(red, green), (red, blue)...}$
- Solutions: assignments satisfying constraints

## eg of CSP: n-queens
- intro: have chessboard of square size, must place queens on the board so that nobody is threatening others
- [formulation 1 - nqueens](https://i.imgur.com/T5Jn2cw.png)
	- variables: $X_{ij}$ the squares = 4 x 4 = 36
	- domains: {0, 1}, for not queen and queen
	- constraint: ...
- [formulation 2 - nqueens](https://i.imgur.com/4SC0P0q.png)

## eg of CSP. cryptarithmetic
- [cryptarithmetic vars, domains, constraints, and CG](https://i.imgur.com/DAm5dLU.png)
- $X_1, X_2, X_3$: carry bit
- $alldiff()$: all have to be different

## eg of CSP. sudoku
- [sudoku vars, domains, constraints](https://i.imgur.com/uqIAtjO.png)
	- another constraints: fill the missing number adhering to the prefilled numbers










