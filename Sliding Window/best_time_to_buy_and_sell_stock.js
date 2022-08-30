/**
 * @param {number[]} prices
 * @return {number}
//  */
 var maxProfit = function(prices) {
    let min = Infinity;
    let max = -Infinity;
    prices.forEach(price => {
        if (price > max){
            max = price;
        }
        if (price < min) {
            min = price;
        }
    });

    console.log(max, min)
};


prices = [7,1,5,3,6,4]
maxProfit(prices)