let numOfCalls=0;
function coinChange(coins, amount) {
    numOfCalls++;
    if (amount === 0) {
      return 0; // Base case: no coins needed
    }
    if (amount < 0) {
      return -1; // Not possible to make the amount
    }
  
    let minCoins = Infinity;
    for (const coin of coins) {
      const result = coinChange(coins, amount - coin);
      console.log("coin:",coin,"amount:",amount,"result:",result)
      if (result >= 0) {
        minCoins = Math.min(minCoins, 1 + result);
      }
    }
  
    return minCoins === Infinity ? -1 : minCoins;
  }

  //O(amount ^coinsCount), space O(amount)
function coinChangeDP(coins, amount) {
    //initialize it to infinity, that's what we do whenever we need to minimize
    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0; // Base case: 0 coins needed for amount 0
  
    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
      for (const coin of coins) {
        if (currentAmount >= coin && dp[currentAmount - coin] !== Infinity) {
          dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount- coin]);
        }
      }
    }

    console.log("DP Table:",dp)
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  }

// Driver code
const coins = [1, 2, 5];
const amount = 11;
console.log("coins",coinChange(coins,amount))
const resultDP = coinChangeDP(coins, amount);
console.log("Minimum coins (DP):", resultDP);

