/**
 * @param {number[]} prices
 * @return {number}
//  */
 var maxProfit = function(prices) {
    let i = 0;
    let j = i + 1;
    let maxProfit = 0;

    while (j < prices.length){
        const left = prices[i];
        const right = prices[j];
        const profit = right - left;

        if (profit < 0) {
            i = j;
            j++;
        } else {
            maxProfit = profit > maxProfit ? profit : maxProfit;
            j++;
        }
    }; 
    return maxProfit;
};



prices = [2,2]
console.log(maxProfit(prices));