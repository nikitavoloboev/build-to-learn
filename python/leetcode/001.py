from typing import List


# Return indices of two numbers in array such that they add up to specific target
def twoSum(nums: List[int], target: int) -> List[int]:
    if len(nums) <= 1:
        return False

    d = {} # Number at index in array -> index in array
    for i, n in enumerate(nums):
        m = target - n
        # Check if there is a match
        if m in d:
            return [d[m], i]
        else:
            d[n] = i


print(twoSum([2, 11, 15, 7], 9))
print("---")
