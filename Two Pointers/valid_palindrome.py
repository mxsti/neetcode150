import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        pattern = r'[^A-Za-z0-9]+'
        s = re.sub(pattern, '', s).lower()

        return s == s[::-1]

solution = Solution()
s = "A man, a plan, a canal: Panama"
print(solution.isPalindrome(s))