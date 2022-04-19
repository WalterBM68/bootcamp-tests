function countAllFromTown(allTown, reg) {
  var count = 0;
  var regNo = allTown.split(",");
  for (let i = 0; i < regNo.length; i++) {
    var numberPlate = regNo[i].trim();
    if (numberPlate.startsWith(reg)) count++;
  }
  return count;
}