---
time: 
tags: 
child:
  - "[[4-to-1 MUX]]"
  - "[[2-to-1 MUX]]"
---
## note
- ![](https://i.imgur.com/sVqWSdD.png)
## Description:
- If selection is 0 choose the first input, otherwise choose the second input
- Combinational circuit that has multiple data inputs and one output, along with additional control or select inputs. The control inputs determine which of the data inputs is connected to the output.
- ![](https://i.stack.imgur.com/VmzKJ.png)

## how it works
- connects *one* of n inputs to the output
	- select control signals pick one of the n sources (*log2n* select bits)
- useful when multiple data sources need to be routed to a single destination
	- Often arises from *resource sharing*
	- Example: select 1-of-n data inputs to an adder
- **understand how it output**
	- The selection lines essentially form a 2-bit binary number that determined which input is selected to appear at the output
	  - eg. 4-to-1 MUX
		- If `S1S0` is `00`, then `I0` is selected.
		- If `S1S0` is `01`, then `I1` is selected.
		- If `S1S0` is `10`, then `I2` is selected.
		- If `S1S0` is `11`, then `I3` is selected.

## cascading multiplexers
- Large multiplexers can be implemented by cascading smaller ones
- [pic](https://i.imgur.com/72D8yDk.png)
