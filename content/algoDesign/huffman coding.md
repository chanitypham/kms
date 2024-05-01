---
time: 
tags:
---
## how to do huffman encoding
- source: [link](https://youtu.be/iEm1NRyEe5c?si=1GmOHPRihyq8sG4O)
- given a string "AABCBAD" -> 7 characters
	- 7 * 8 bits (UTF-8) = 56 bits
		- _Unicode transformation format_ = UTF
- write table of the # of repetition for each character 
	- ![](https://i.imgur.com/YDu3tq3.png)
- make huffman tree by joining the 2 least repeated elements. continue until an entire tree is made with every element
	- ![](https://i.imgur.com/2YUL48L.png)
	- ![](https://i.imgur.com/YcnVxbO.png)
	- ![](https://i.imgur.com/I4FSH6W.png)
	- ![](https://i.imgur.com/UeCww7q.png)
		- left path is 0 
		- right path is 1
- encode each character
	- ![](https://i.imgur.com/ObC6XE4.png)
- final result
	- ![](https://i.imgur.com/hnkdic5.png)

