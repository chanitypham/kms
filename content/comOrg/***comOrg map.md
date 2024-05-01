---
time: 2024-03-03T09:06:00
tags:
  - computerArchitecture
---
# comOrg map
## Lecture 1
- [[translators - assembler + compiler + interpreter]]
- [[instruction set architecture (ISA)]]
- [[moore's law]]
- [[base10 - decimal, base2 - binary, base16 - hexadecimal]]
- [[negative numbers _ sign-magnitude + twos-complement + sign extension & truncation]]

## Lecture 2
- [[transistors _ n-type and p-type]]
- [[cmos notation]]
- [[logic gates]]
- [[universal gates _ nand + nor]]
- [[hide complexity in logic gates through abstraction]]
- [[multiplexer - MUX]] 
- [[logic symbols & notation]] 
- [[logic implementation _ from truth tables to logic circuits]]

## Lecture 3
- [[Combinational circuits]]
- [[equality comparators using XOR]]
- [[multiplexer - MUX]]
	- [[2-to-1 MUX]]
	- [[4-to-1 MUX]]
- [[decoder]]
- [[encoder]]

## Lecture 4: Binary Arithmetic
- [[1 bit & 4 bit full adder]]
- [[overflow]]
- [[binary subtraction]]
- [[4 bit adder OR subtractor]] #toProceed 
- [[shifters]] #toProceed 
- [[Arithmetic Logic Unit - ALU]]
- [[numbers with fractions in computer]]
## Lecture 5: Sequential Logic
- [[Sequential circuits]]
	- [[clock in sequential circuit]]

## Lecture 6: Finite State Machines
- [[Finite State Machine]]
	- [[Moore machine]]
	- [[Mealy machine]]
- [[State diagram]]
- state encoding:
	- Binary encoding: 
		- N states need $log_{2}N$ FFs
		- Eg: S0 = 00, S1 = 01, S2 = 10, S3 = 11
		- tables
			- state transition
				- ![](https://i.imgur.com/UFPam1N.png)
			- binary encoding
				- ![](https://i.imgur.com/6mSJrcr.png)
			- min term table => minterms => shorten, if possible
				- ![](https://i.imgur.com/IR811N3.png)
			- circuit
	- One-hot encoding
		- Each state has 1 flip flop, Q of 1 FF = 1, Q of others = 0
		- Eg:             Q3 Q2 Q1 Q0
			- S0 =   0    0    0    1
			- S1 =    0    0    1    0
			- S2 =    0    1    0    0
			 - S3 =    1    0    0    0
		 - ![](https://i.imgur.com/iJ0xofG.png)
		 - circuit

## Lecture 8+9: RISC-V ISA
- [[level of languages in computer]]
- number of assembly languages: many, each processor need 1 
- similar to number of C (?)
- RV32I - calc integers
- RV64F - calc float
- [[instruction processing]]
- [[RISC-V]]
- [[User level ISA]]
- [[RISC-V registers]]
- [[Instruction Types & RISC-V Instruction Types]]
	- [[R-Type 1: arithmetic and logic]]
	- [[R-Type 2: shift instructions]]























