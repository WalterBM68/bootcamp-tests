function findItemsOver(find, t){
    var total = [];
    for (let i = 0; i < find.length; i++) {
      if (find[i].qty > t)
        total.push(find[i]);
    }
    return total;
}