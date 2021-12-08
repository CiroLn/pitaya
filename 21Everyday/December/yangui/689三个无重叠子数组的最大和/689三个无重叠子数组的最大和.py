class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        le = len(nums)
        pre,suf = sum(nums[:k]),sum(nums[-k:])
        prem,sufm,prei,sufi = pre,suf,0,le-1
        P,S=[(prem,0)],[(sufm,le-1)]
        # 前缀
        for i in range(1,le-k+1):
            pre = pre - nums[i-1] + nums[i+k-1]
            if pre > prem:
                prem = pre
                prei = i
            P.append((prem,prei))
        # 后缀
        for i in range(le-2,k-2,-1):
            suf = suf - nums[i+1] + nums[i-k+1]
            if suf >= sufm:
                sufm = suf
                sufi = i
            S.append((sufm,sufi))
        # 滑动
        mx = 0
        ans = []
        sm = sum(nums[k-1:k+k-1])
        for i in range(k,le-k*2+1):
            sm = sm - nums[i-1] + nums[i+k-1]
            pre,prei = P[i-k]
            suf,sufi = S[le-(i+2*k)]
            sm3 = sm + pre + suf
            if sm3 > mx:
                mx = sm3
                ans = [prei,i,sufi-k+1]
        return ans
