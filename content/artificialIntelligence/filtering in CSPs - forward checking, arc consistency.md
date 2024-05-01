---
time: 
tags: 
child:
---
## filtering:
 - keep track of domains for unassigned variables, cross off bad options

## forward checking
- a way of filtering
- cross off values violating constraint when added to existing assignment
- [process of forward checking aus map](https://i.imgur.com/2w0sE6b.png)
- prevent the generation of paths leading to a dead-end in the search tree -> more efficient than simple backtracking

## constraint propagation
- propagates info from assigned to unassigned vars
- doesnt provide early detection for all failures (checking btw unassigned and unassigned vars)
- reason from constraint to constraint 

## arc consistency
- an arc is just an edge with direction => an edge means 2 arcs to check => we can check satisfaction in 2 different directions 
- arc consistency = all arcs are consistence
- conceptually, can check an arc between 2 things not connected by a constraint 
- arc is consistent = no constraint violation along the arc => for 1 thing in the tail, there is at least one OK option in the head
- if violating => **delete from the TAIL** 
- every time deleting from a domain, arcs declared consistent pointing into it, is now **questionable** again 
- => dont have to backtrack as much as forward checking, as it **detects failure earlier**
- <u>disadvantage:</u> 
	- bad runtime
	- convergence
- trade off between making the core search run faster & doing more filtering
- AC3: algo to enforce arc consistency in a CSP
### limitation after enforcing arc consistency:
- can have 1 solution/multiple solutions/no solution left
- arc consistency runs inside a backtracking search

## difference btw arc consistency and forward checking
- forward checking check constraints between current and future variables; arc consistency checks constraints between unassigned variables 
- FC is faster to perform than AC

## K-consistency
- 
