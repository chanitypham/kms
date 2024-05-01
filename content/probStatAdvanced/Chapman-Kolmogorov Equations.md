---
time: 
tags:
  - Math/probability/markovChain/chapman
child:
---
## Chapman-Kolmogorov Equations
- n-step transition probabilities $P_{ij}^n$: probability a process state $i$ will be in state $j$ after $n$ additional transitions
	- $P_{i j}^{n}=P\{X_{n+k}=j\mid X_{k}=i\},\ n\geq0,\ i,j\geq0.$ 
- Chapman-Kolmogorov equations to compute n-step transition probabilities
	- $P_{i j}^{n+m}=\sum_{k=0}^{\infty}P_{i j}^{n}P_{i j}^{m}\;\;\;\forall n,m\geq0,\;\forall i,j$ 

- $\textbf{P}^{(n)}$: matrix of n-step transition probabilities $P_{ij}^n$  
	- $\textbf{P}^{(n+m)}=\textbf{P}^{(n)}\cdot \textbf{P}^{(m)}$ 
	- => n-step transition matrix obtained by multiplying $\textbf{P}$ by itself $n$ times