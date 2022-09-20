/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums: number[], target: number): [number, number] | undefined {
    // let res = [];
    // for (let i=0; i<nums.length; i++) {
    //     nums.forEach((num,ind) => {
    //         if (i === ind) return;
    //         if (nums[i] + num === target) {
    //             res = [i, ind]
    //         }
    //     })
    // };
    // return res;
    
    // return nums.reduce((acc, cur, curInd, arr) => {
    //     const resInd = arr.indexOf(target - cur, curInd + 1);
    //     if (resInd !== -1) {
    //         return [curInd, resInd];
    //     }
    //     return acc;
    // }, [])
    
    const resMap = new Map<number, number>();
    for (let i=0; i<nums.length; i++) {
        
        if (resMap.has(target - nums[i])) {
            return [resMap.get(target - nums[i])!, i];
        }
        
        resMap.set(nums[i], i);
    }
};

// https://leetcode.com/problems/two-sum