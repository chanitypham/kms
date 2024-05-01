---
time: 
tags: 
child:
---
## what is moving average
- A series of arithmetic averages over a given number of time periods. It is the estimate of the long run average of the variable.
- Help smoothing out the data with less peaks and valley
    - large grouped data point will be more smooth
- given k is the amount considered in MA (eg. # of months)
	- if considering most recent values -> small value of k is preferred
	- if considering past values -> larger value of k is preferred

## Odd number of time periods in moving average
- The average of any 3 data points becomes the value of the 2nd data point

## Even number of time periods in moving average 
- Formula: $\\((0.5*a + b + c + d+ 0.5*e) / 5\\)$, place the value in position 3, similarly for other odd time periods
- Other way: in 4 months, calculate sum of 2 months twice, then calculate that total sum