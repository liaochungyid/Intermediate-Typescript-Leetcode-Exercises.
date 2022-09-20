function climbStairs(n: number): number {
    // Time Limit Exceeded at 44
    // if (n === 1) return 1;
    // if (n === 2) return 2;
    // return climbStairs(n-1) + climbStairs(n-2);
    
    // tree left and right will duplicately compute
    // it is an Fibonacci
    return [...Array(n)].reduce((acc) => ([acc[1], acc[0] + acc[1]]), [0, 1])[1];
};

// https://leetcode.com/problems/climbing-stairs/