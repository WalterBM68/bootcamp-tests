function transportFee(fee){
    var text;
    switch(fee){
      case 'morning': 
        text = 'R20';
        break;
      case 'afternoon': 
        text = 'R10';
        break;
      case 'nightshift': 
        text = 'free';
     }
    return text;
}