class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_arr = []
        t_arr = []
        for c in s:
            s_arr.append(ord(c))
        for c in t:
            t_arr.append(ord(c))
        s_arr.sort()
        t_arr.sort()

        return s_arr == t_arr