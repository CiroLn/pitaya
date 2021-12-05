base = 1337
class Solution:

    def superPow(self, a: int, b: List[int]) -> int:
        if len(b) == 0:
            return 1 

        last = b.pop()
        powa = self.dealPow(a, last)
        powb = self.dealPow(self.superPow(a,b), 10)

        return (powa * powb) % base

    def dealPow(self, a: int, b: int):
        if b == 0:
            return 1
        a %= base
        if (b % 2) == 0:
            return self.dealPow(a * a, b / 2)
        else:
            return a * self.dealPow(a, b-1)
