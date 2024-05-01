---
time: 
tags:
  - Math/probability/markovChain
child:
  - "[[Chapman-Kolmogorov Equations]]"
---
## Intro
- $\{X_{n}, n = 0, 1, 2 ,...\}$ is a stochastic process
- If $X_n = i$ => process is in state $i$ at time $n$
- $n \geq 0$
- Markov property: "**memoryless**" - next state depends only on current state, not the sequence of events in the past

- Whenever process in state i -> fixed probability $P_{ij}$ that process will next be in state j
- $P\{X_{n+1}=j\mid X_{n}=i,X_{n-1}=i_{n-1},\ldots,X_{1}=i_{1},X_{0}=i_{0}\}=P_{i j}$ 
	- for all states $i_0, i_1,\cdots,i_{n-1},i,j$ and all $n \geq 0$

- Markov chain: conditional distribution of any future state $X_{n+1}$, given past states $X_{0},\cdots,X_{n-1}$ and present state $X_n$, is **independent of past states**, and **depends only on the present state**
- $\textbf{P}$: matrix of one-step transition probabilities $P_{ij}$ 
	- $\left[\begin{array}{l l l}{P_{00}}&{P_{01}}&{P_{02}}&{\cdots}\\ {P_{10}}&{P_{11}}&{P_{21}}&{\cdots}\\ {\vdots}&{\vdots}&{\vdots}\end{array}\right]$ 
	- eg. $P_{10}$: from row to column => row 1, col 0
- simple example: a Markov chain modeling the weather, in which we know today is sunny, can give us probability for whether tomorrow is sunny, rainy or cloudy solely based on today's data