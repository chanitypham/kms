---
time: 
tags:
  - computerArchitecture/ISA
child:
  - "[[RISC-V]]"
---
## definition
- abstract interface between hardware and the lowest level software
- ![](https://i.imgur.com/7c0Z6wu.png)
- ![](https://i.imgur.com/hCuAC8T.png)
- group of commands that processor can perform, to execute the program instructions
- every processor designed is based on 1 specific ISA, which defines the operational capacity of processor in terms of set of commands, that the processor can decode and execute
- Intel 8085 ISA, has 246 operation codes, 74 instructions![](https://i.imgur.com/4Pnend1.png)

## how ISA is implemented
- ![](https://i.imgur.com/4NaFALz.png)
- microarchitecture
	- processor architecture at the hardware level
	- actual hardware implementation of the ISA
	- hardware circuitry of the processor chip that implements 1 particular ISA