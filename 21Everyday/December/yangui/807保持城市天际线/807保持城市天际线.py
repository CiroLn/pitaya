class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        lineMax,rowMax = [], []
        for i in range(len(grid)):
            lineMax.append(max(grid[i]))
        for i in range(len(grid)):
            maxItem = 0
            for j in range(len(grid[0])):
                if(grid[j][i] > maxItem):
                    maxItem = grid[j][i]
            rowMax.append(maxItem)
        result = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                result += min(lineMax[i],rowMax[j]) - grid[i][j]
        return result
        
            
