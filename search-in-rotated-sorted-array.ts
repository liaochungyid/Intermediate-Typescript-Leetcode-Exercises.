function search(nums: number[], target: number): number {
    // build-in function
    // return nums.indexOf(target);
    
    let [start, end] = [0, nums.length - 1];
    
    while(start <= end) {
        const mid = Math.floor((start + end + 1) / 2);
        const [left, middle, right] = [nums[start], nums[mid], nums[end]];

        if (middle === target) return mid;
        
        if (left < middle) {
            if (target < middle && target >= left) end = mid - 1
            else { start = mid + 1; };
        } else {
            if (target > middle && target <= right) start = mid + 1
            else { end = mid - 1; };
        }
    };
    
    return -1;
};

// https://leetcode.com/problems/search-in-rotated-sorted-array