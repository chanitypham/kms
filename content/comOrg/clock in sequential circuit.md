---
time: 2024-03-25T12:40:00
tags:
  - comArc/sequentialCircuit
child:
---
## what is clock in sequential circult
- an input to a sequential circuit that changes **output** and **state values** at a predetermined rate

## triggering edge
- transition of the clock, capturing the input data
- include:
	- Positive (rising) edge: 0 ->1
	- Negative (falling) edge: 1 -> 0
- clock tick = occurrence of a triggering edge

## clock period and frequency
- clock period (cycle time): time between successive transitions in the same direction = $t_{per}$
- clock frequency: $1/t_{per}$ 
- [pic - clock period and frequency](https://i.imgur.com/m6Jrj4R.png)

## edge-triggered storage
- [[D Flip Flop - DFF]]