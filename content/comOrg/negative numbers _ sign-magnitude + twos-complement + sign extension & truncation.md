---
time: 2024-03-03T15:47:00
tags:
---
## sign-magnitude representation
- consists of 2 parts: sign and magnitude
- decimal example: $+123_{10}$ and $-123_{10}$
- binary example: $01100_2 = +12_{10}, 11100_2 = -12_{10}$ 
	- sign represented by MSB (most significant bit = leftmost digit): 1 = negative, 0 = positive

## two's complement representation
- represent negative number
- positive numbers represented as usual
- leading 1's for negative numbers
- to negate any number
	- <u>WAY 1</u>
		- flip all the bits
		- add 1 to the least significant bit (LSB = rightmost digit)
	- <u>WAY 2</u>
		- translate normally like base 10 -> 