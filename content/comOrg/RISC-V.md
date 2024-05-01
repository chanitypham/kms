---
time: 2024-03-29T01:15:00
tags: 
child:
---
## what is RISC-V (reduced instruction set computer)
### RISC-V, pronounced "risk five", is an ISA standard (a document)
- open-source implementation of a reduced-instruction-set-computer-based instruction set architecture
- previous version before: RISC-I, II, III, IV 
### most ISA: X86, ARM, Power, MIPS, SPARC
- commercially protected by patents
- prevent practical efforts to reproduce computer systems (so as to effectively sell patents :D)
### RISC-V is open source
- permit any person / group to construct compatible computers
- use associated software
### originated from UC Berkeley
- in 2010, by CS researchers at UCB
- now has large number of contributors

## RISC-V ISA principles
- **kept simple** & **extendable**
- separated into multiple specifications
	- User-Level (unprivileged) ISA spec  
	- Compressed ISA spec (16-bit instructions)  
	- Privileged ISA spec (supervisor-mode instructions)
- ISA support is given by $\textcolor{red}{RV}$ + $\textcolor{blue}{word-width}$ + $\textcolor{green}{extensions\;supported}$
	- E.g. RV32I means $\textcolor{blue}{32bit\;RISC-V}$ with $\textcolor{green}{support\;for\;the\;I\;instruction\;set}$
	- E.g. RV64F means 64-bit RISC-V with support for the Single precision Floating-point instruction set