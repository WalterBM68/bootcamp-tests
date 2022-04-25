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
    if(salesData === ''){
      return 'Error'
    }
    return department;
  }
  