---
time: 
tags: 
child:
---
## Instruction Types
### Arithmetic
• add, subtract, shift left, shift right, multiply, divide
### Memory
• load value from memory to a register
• store value to memory from a register
### Control flow
• conditional jumps (branches)
• jump and link (subroutine call)
### Many other instructions are possible
• vector add/sub/mul/div, string operations
• manipulate coprocessor
• I/O

## RISC-V Instruction Types
- Arithmetic/Logical
	- R-type: result and two source registers, shift amount
	- I-type: result and source register, shift amount in 16-bit immediate with sign/zero extension
	- U-type: result register, 16-bit immediate with sign/zero extension
- Memory Access
	- I-type for loads and S-type for stores
	- load/store between registers and memory
	- word, half-word and byte operations
- Control flow
	- S-type: conditional branches: pc-relative addresses
	- U-type: jump-and-link
	- I-type: jump-and-link register
- ![](https://i.imgur.com/dhixTy9.png)
