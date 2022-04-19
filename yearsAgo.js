function yearsAgo(date) {
    var year = new Date();
    var name = (year.getFullYear());
    return name - date;
}