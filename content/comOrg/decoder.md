---
time: 2024-03-07T15:31:00
tags: 
child: []
---
## binary decoders
- **n inputs, $\\(2^n\\)$ outputs**
- Each output corresponds to a unique input value
- At most one output asserted at a time (all is outputted at the same time >< only 1 is active)
- ![](https://i.imgur.com/BloF6fb.png)

## 2-to-4 decoder
- ![](https://i.imgur.com/p03BEFF.png)
- example: remember **n inputs, $\\(2^n\\)$ outputs**
	- A1A0 is 00 -> `1` in Y0
	- A1A0 is 01 -> we have 0 input -> output is 2^0 = 1  -> Y1 = 1
	- A1A0 is 11 -> 2^1 + 2^0 = 3 -> Y3 = 1
## 3-to-8 decoder
- ![](https://i.imgur.com/gizOfWE.png)
- A2A1A0 is `110` -> 2^2+2^1 = 6 -> Y6 = 1
## decoder with enable
- [pic1](https://i.imgur.com/oaGVahp.png)
	- illustration: 
		- 1st row 0XX = when the enable is turned off, whatever input, there wont be any output
		- from row 2 onward, enable is 1, it works just like normal decoder, taking into account the output solely not the enable anymore
- [pic2](https://i.imgur.com/jZpfJNW.png): enable is drawn just like an extra input
