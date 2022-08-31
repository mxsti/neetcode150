class MinStack:

    def __init__(self):
        self.stack = []
        self.mins = []

    def push(self, val: int) -> None:
        if (len(self.mins) == 0 or val <= self.mins[-1]):
            self.mins.append(val)
        self.stack.append(val)

    def pop(self) -> None:
        popped = self.stack.pop()
        if (popped == self.mins[-1]):
            self.mins.pop()

    def top(self) -> int:
        return self.stack[-1]        

    def getMin(self) -> int:
        return self.mins[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()