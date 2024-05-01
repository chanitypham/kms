---
time: 2024-03-26T22:58:00
tags: 
child:
---
## what is backtracking search
- a type of DFS
- basic uninformed algorithm for solving CSPs (dont have additional information about the state beyond its definition; doesnt know whether close to solution or not until finds one, or exhaust all possibilities)
1. One variable at a time
	- ﻿﻿Variable assignments are commutative (giao hoán) -> fix ordering
	- ﻿﻿I.e., [WA = red then NT = green] same as [NT = green then WA = red]
	- ﻿﻿Only need to consider assignments to a single variable at each step
2. Check constraints as you go
	- ﻿﻿I.e. consider only values which do not conflict with previous assignments
	- ﻿﻿Might do some computation to check constraints
	- ﻿﻿"Incremental goal test"
- ﻿﻿Can solve n-queens for n = 25
- [pic - algorithm implementing backtracking](https://i.imgur.com/zqzSJ16.png)
- Backtracking = DFS + variable-ordering + fail-on-violation

## improving backtracking
- general purpose idea (not like heuristics in A* - custom the the search problem) but give huge gains in speed
- Ordering
	- variable should be assigned next?
	- values tried in what order?
- ﻿﻿Filtering: Can we detect inevitable failure early? -> [[filtering in CSPs - forward checking, arc consistency]]
- ﻿﻿Structure: Can we exploit the problem structure?