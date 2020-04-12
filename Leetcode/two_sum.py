def twoSum(nums, target):
    complementMap = dict()

    for i in range(len(nums)):
        currentNum = nums[i]
        complement = target - currentNum
        if currentNum in complementMap:
            return [complementMap[currentNum], i]
        else:
            complementMap[complement] = i


twoSum([2, 7, 11, 2, 15], 9)
