---
time: 
tags: 
child:
---
## implementation
```python
def dfs(matrix, start):
    visited = []
    stack = [start]

    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.append(vertex)
            for i in range(len(matrix)):
                if matrix[vertex][i] and i not in visited:
                    stack.append(i)

    return visited

n = int(input())
matrix = [list(map(int, input().split()))for _ in n]
start = int(input())
dfs(matrix, start)
```
