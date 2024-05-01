---
time: 2024-03-26T14:18:00
tags: 
child:
  - "[[constraint graphs]]"
  - "[[examples of constraint satisfaction problems]]"
---
## standard search problems
- state is a "black box": arbitrary data structure
- goal test: any function over states
- successor function can be anything

## constraint satisfaction problems
- special subset of search problems
- state defined by variables $X_i$, values from domain $D$ ($D$ sometimes depends on $i$)
- Goal test: set of constraints specifying allowable combination of values for subsets of variables
- simple example of a **formal representation language**
- allows more power and useful general-purpose algorithms than standard search algos

## Varieties of CSP
- Discrete Variables
	- *finite domains*:
		- size $d$ means $O(d^n)$ complete assignments -> still bad
		- eg. boolean CSPs (including Boolean satisfiability - NP complete)
	- Infinite domains (integers, strings, etc)
		- job scheduling, variables are start/end times 
		- linear constraints solvable, nonlinear undecidable
- Continuous variables
	- eg. start/end times for hubble telescope observations
	- linear constraints solvable in polynomial time by LP methods

## Varieties of Constraints
- ﻿﻿Unary constraints involve a single variable (equivalent to reducing domains), e.g.:  $SA \neq green$
- ﻿﻿Binary constraints involve pairs of variables, e.g: $SA \neq WA$
- ﻿﻿Higher order constraints involve 3 or more variables: e.g., cryptarithmetic column constraints
- ﻿﻿Preferences (soft constraints):
	- ﻿﻿E.g., red is better than green
	- ﻿﻿Often representable by a cost for each variable assignment
	- ﻿﻿Gives constrained optimization problems
	- ﻿﻿(We'll ignore these until we get to Bayes' nets)

## real world CSPs
- ﻿﻿Scheduling problems: e.g., when can we all meet?
- ﻿﻿Timetabling problems: e.g., which class is offered when and where?
- ﻿﻿Assignment problems: e.g., who teaches what class
- ﻿﻿Hardware configuration
- ﻿﻿Transportation scheduling
- ﻿﻿Factory scheduling
- ﻿﻿Circuit layout
- ﻿﻿Fault diagnosis
- ﻿﻿... lots more!