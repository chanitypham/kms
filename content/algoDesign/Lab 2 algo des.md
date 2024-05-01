# Theory Practice
## Question 1
- Second loop runs from $0$ to $i^2 - 1$ -> when $j\;\%\;i$, the third loop will run $1,i,2i,\cdots$ times
- Total loop: $1+i+2i+\cdots+(i-1)i = 1+\frac{i^2(i-1)}{2}$ => Complexity is $O(n^3)$
- => Total complexity: $O(n^4)$ (count the first loop)

## Question 2
- To prove that $f_1 + f_2 = \theta(max\{f_1(n), f_2(n)\})$, we need to show there exists positive constants $k_1, l_2, n_0$ such that $\forall n \geq n_0$ we have:
	- $k_1 . max(f_1, f_2) \leq f_1 + f_2 \leq k_2 . max (f_1, f_2)$ 
- WLOG, we assume $f_1 \leq f_2$ so we have to prove
	- $k_1 . f_2 \leq f_1 + f_2 \leq k_2 . f_2$
- With $k_2 = 2$, the right inequality always hold as $f_{1}+f_{2}\leq f_{2}+f_{2}=2\cdot f_{2}$
=> By choosing $k_1 = 1, k_2 = 2,$ and any $n_0$

- From the definition, we have $f(n) = \theta(g(n))$ => f is asymptotically positive ($f > 0)$. 
- With $k_1 = 1$, the left inequality always hold as $f_{1}+f_{2}\geq f_{2}\,\left(\mathrm{since}\,\,f\geq0\right)$
=> Proving $max(f_{1},f_{2})\,=\,\theta(f_{1}\,-\,f_{2})$  is now finding $k_1, k_2$
and $n_0$ such that for all $n \geq n_0$ we have:
$k_{1}\cdot(f_{1}-f_{2})\leq m a x(f_{1},f_{2})\leq k_{2}\cdot(f_{1}-f_{2})$. With $f_1 = x, f_2 = x-1$ => $k_{1}\cdot1\leq x\leq k_{2}\cdot1$ 
As x varies, it is impossible to find such constants $k1 , k2$ => The statement is then disproved
## Question 3:
- We can use Hash Set, in which we will gradually append an element into the Hash Set. We then will not append an element that already appears in the Set
- The operation of adding an element to the Set and checking whether there already has that element has the complexity of $O(n)$
- the suggested code
```python
def removeDuplication(arr):
	hash_Set = set()
	for i in arr:
		if i not in hash_Set:
			hash_Set.add(i)
	print(hash_Set)

removeDuplication([1,2,4,4,6,2,4,7,6])
```
- this will output:
```python
{1, 2, 4, 6, 7} # a set of integers with no duplications
```

## Question 4:
- The worst case running time of this algorithm:
	- for subproblems with size $\le k$, the algorithm uses insertion sort, with worst case time complexity is $O(k^2)$
	- The complexity of using Merge sort with problem size $k$ in this case is $O(log(n/k))$. As each layer requires O(n) for merging, the complexity for this process if $O(nlog \frac{n}{k})$
	- The complexity of using Insertion sort with the problem size $k$ in this case is $O(k^2.\frac{n}{k}) = O(nk)$
	- Total complexity would be: $O(nk + nlog\frac{n}{k})$

## Question 5:
We have: $\sum_{i=2}^{\infty} \frac{1}{i} \leq \int_{1}^{n} \frac{1}{x} \iff H(n) \leq \int_{1}^{n} \frac{1}{x} + 1 - ln(n) + 1$  

We also have: $\sum_{i=1}^{\infty} \frac{1}{2} \geq \int_{1}^{n} \frac{1}{x} \iff H(n) \geq ln(n)$
=> $ln(n) \leq H(n) \leq ln(n) + 1$