## Context
- Time: 06 04 2024 - 22:32
- Tags: #computerScience/AI-ML/CSPs 
- Child: 
- Source: 

## Minimum Remaining Values #fc 
- problem in improving backtracking: which variable should be assigned next? -> MRV 
- definition: choose variable with minimum legal values left in its domain
	- also called "most constrained variable" or "fail-fast" ordering

## Least constraining value #fc
- problem in improving backtracking: in what order should the variable's values be tried? -> LCV
- definition: choose the least constraining value (the one that rule out fewest values in the remaining variables)
	- might take computation: eg. rerunning filtering