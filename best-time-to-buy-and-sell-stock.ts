/**
 * @param {number[]} prices
 * @return {number} 
 */
 var maxProfit = function(prices: number[]): number {
    return prices.reduce((acc, cur) => ([
        cur < acc[0] ? cur : acc[0],
        Math.max(acc[1], cur - acc[0])
    ]), [Infinity, 0])[1];
    
    // let min = Infinity;
    // let best = 0;
    // for (let i=0; i<prices.length; i++) {
    //     min = prices[i] < min ? prices[i] : min;
    //     best = Math.max(best, prices[i] - min);
    // }
    
    // while (prices.length) {
    //     const temp = prices.shift()
    //     if (temp < min) min = temp
    //     else { continue; };
    //     const temp_best = Math.max(...prices) - min;
    //     if (temp_best > best) best = temp_best;
    // };
    
    // return best;
    
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock