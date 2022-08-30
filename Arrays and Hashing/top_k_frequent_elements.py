from itertools import count
from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counted_dict = {}
        sorted_dict = {}
        sorted_array = []
        for num in nums:
            if num in counted_dict:
                counted_dict[num] = counted_dict[num] + 1
            else:
                counted_dict[num] = 1
        sorted_keys = sorted(counted_dict, key=counted_dict.get, reverse=True)
        for key in sorted_keys:
            sorted_dict[key] = counted_dict[key]

        for key in sorted_dict:
            sorted_array.append(key)

        return(sorted_array[:k])

s = Solution()
nums = [1,1,1,2,2,3]
k = 4
print(s.topKFrequent(nums, k))