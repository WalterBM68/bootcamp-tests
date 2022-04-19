function isWeekday(day){
    return (day.includes('Monday')) ? true : (day.includes('Tuesday')) ? true : 
           (day.includes('Wednesday')) ? true :(day.includes('Thursday')) ? true :
           (day.includes('Friday')) ? true : false;
  }