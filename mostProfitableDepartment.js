function mostProfitableDepartment(salesData){
    let salesMap = {};
    for(let i = 0; i < salesData.length; i++){
      if(salesMap[salesData[i].department] === undefined){
        salesMap[salesData[i].department] = salesData[i].sales;
      }else{
        salesMap[salesData[i].department] += salesData[i].sales
      }
    }
    let maxNumber = 0;
    let department = '';
    for(i in salesMap){
      if(maxNumber < salesMap[i]){
        maxNumber = salesMap[i]
        department = i;
      }
    }
    return department;
  }
  
  function mostProfitableDay(salesData){
    let salesMap = {};
    for(let i = 0; i < salesData.length; i++){
      if(salesMap[salesData[i].day] === undefined){
        salesMap[salesData[i].day] = salesData[i].sales;
      }else{
        salesMap[salesData[i].day] += salesData[i].sales
      }
    }
    let maxNumber = 0;
    let day = '';
    for(i in salesMap){
      if(maxNumber < salesMap[i]){
        maxNumber = salesMap[i]
        day = i;
      }
    }
    return day;
}
  