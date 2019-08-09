function ageCalculate() {

    var birthDate = document.getElementById('birth_date').value;

    var mdate = birthDate.toString();

    var yearThen = parseInt(mdate.substring(0, 4), 10);
    var monthThen = parseInt(mdate.substring(5, 7), 10);
    var dayThen = parseInt(mdate.substring(8, 10), 10);

    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);

    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    //31536000000 = 1 year
    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;


    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
        document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
    } else {
        document.getElementById("year").innerHTML = year_age + " years "
        document.getElementById("days").innerHTML = month_age + " months " 
        document.getElementById("month").innerHTML = day_age + " days"

    }

}