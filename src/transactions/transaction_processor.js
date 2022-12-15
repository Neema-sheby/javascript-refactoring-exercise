function processTransactions(transactions) {
    if (transactions === undefined) {
      throw new Error("Undefined collection of transactions");
    }
  
    const txCount = {};
    
    for (let transaction of transactions) {
      txCount[transaction]
        ? (txCount[transaction] += 1)
        : (txCount[transaction] = 1);
    }
  
    const sortByAmountThenName = Object.keys(txCount).sort(
      (itemOne, itemTwo) => {
        return txCount[itemTwo] - txCount[itemOne] ||
        itemOne > itemTwo ||
        -(itemOne < itemTwo)
      }
    );
  
    return sortByAmountThenName.map((key) => `${key} ${txCount[key]}`);
  }

module.exports = processTransactions;
