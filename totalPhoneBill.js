function totalPhoneBill(theBill){
    var newOne = theBill.split(',');
    var totalAmount = 0;
    for(let i = 0; i < newOne.length; i++){
      let all = newOne[i].trim();
      if(all === 'call'){
        totalAmount += 2.75;
      }else if(all === 'sms'){
        totalAmount += 0.65;
      }
    }
    let total = (totalAmount).toFixed(2);
    return 'R' + total;
}