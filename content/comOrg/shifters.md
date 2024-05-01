---
time: 
tags: 
child:
---
## logical shifters (>> or <<)
- shift value to left or right, fill empty spaces with 0's
	- Ex: 11001 >> 2 = 00110
	- Ex: 11001 << 2 = 00100

## Arithmetic shifter (>>> or <<<)
- same as logical shifter, but on right shift, fills empty spaces with the **old most significant bit** (msb).
	- Ex: 11001 >>> 2 = 11110
	- Ex: 11001 <<< 2 = 00100
## Rotator
- rotates bits in a circle, such that bits shifted off one end are shifted into the other end
	- Ex: 11001 ROR 2 = 01110 (put skipped to be the beginning, rotate right)
	- Ex: 11001 ROL 2 =  00111(put skipped to the end, rotate left)

## shifter design #toProceed
- ![](https://i.imgur.com/x1fI6JU.png)
	- eg. shift 2 times the input Y3 Y2 Y1 Y0 => they are all at 10 => 0 0 A3 A2
## shifters as multipliers, dividers
- just like in base 10, now is for base 2
- $A << N = A × 2^N$
	- Example: 00001 << 2  = 00100  (1 × $2^2$ = 4)
	- Example: 11101 << 2  = 10100  (-3 × $2^2$ = -12)

- $A >>> N = A ÷ 2N$
	- Example: 01000 >>> 2 = 00010  (8 ÷ 22 = 2)
	- Example: 10000 >>> 2 = 11100  (-16 ÷ 22 = -4)
