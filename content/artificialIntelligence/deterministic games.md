---
time: 
tags: 
child:
---
Many possible formalizations, one is: 
- States: S (start at s0) 
- Players: P={1...N} (usually take turns) 
- Actions: A (may depend on player / state) 
- Transition Function: S x A -> S 
- Terminal Test: S -> {t,f} 
- Terminal Utilities: S x P -> R 

Solution for a player is a policy: S -> A