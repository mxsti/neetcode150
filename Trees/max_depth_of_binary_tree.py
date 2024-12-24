from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def depth_first(root, level):
            if not root:
                return level
            return max(depth_first(root.left, level + 1), depth_first(root.right, level +1))
        return depth_first(root, 0)
