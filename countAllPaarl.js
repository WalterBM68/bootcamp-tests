function countAllPaarl(thePaarl){
    var count = 0;
    var registration = thePaarl.split(',');
    for(let i = 0; i < registration.length; i++){
      var numberPlate = registration[i].trim();
      if(numberPlate.startsWith('CJ'))
        count++;
    }
    return count;
}