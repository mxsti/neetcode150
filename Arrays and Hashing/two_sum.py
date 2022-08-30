class Solution:
    def twoSum(self, nums, target):
        for index in range(len(nums)):
            x = nums[index]
            for i in range (index + 1,len(nums)):
                if x + nums[i] == target:
                    return [index,i]