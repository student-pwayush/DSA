class Solution {
    public boolean canFormAtleastPpairsWithAtmostMidDiff(int[] nums, int p, int mid) {
        int i = 0, count = 0;
        while(i < nums.length - 1) {
            if(nums[i+1] - nums[i] <= mid) { 
                count++;
                i+=2;
            } else {
                i++;
            }
        }
        return count >= p;
    }
    
    public int minimizeMax(int[] nums, int p) {
        Arrays.sort(nums);
        int n = nums.length;
        int lo = 0, hi = nums[n-1] - nums[0];
        int ans = hi;
        while(lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if(canFormAtleastPpairsWithAtmostMidDiff(nums, p, mid)) {
                ans = mid;;
                hi = mid-1;
            } else {
                lo = mid+1;
            }
        }
        return ans;
    }

}
