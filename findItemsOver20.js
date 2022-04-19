function findItemsOver20(price) {
    var total = [];
    for (let i = 0; i < price.length; i++) {
      if (price[i].qty > 20)
        total.push(price[i]);  
    }
    return total;
}