const oldDateRes = document.getElementById('oldDate');
const currentDateRes = document.getElementById('currentDate');
const addDaysRes = document.getElementById('addDays');
const subtractDaysRes = document.getElementById('subtractDays');

const oldDate = moment.unix("20111031").format("DD-MM-YYYY");

oldDateRes.innerHTML = "Timestamp 20111031 = " + oldDate;

const currentDate = moment.unix("1529571377").format('ll');

currentDateRes.innerHTML = "Timestamp 1529571377 = " + currentDate;

const addDays = moment.unix("1529571377").add(11, 'days').calendar();

addDaysRes.innerHTML = "Timestamp 1529571377 = " + addDays;

const subtractDays = moment.unix("1529571377").subtract(4, 'days').calendar();

subtractDaysRes.innerHTML = "Timestamp 1529571377 = " + subtractDays;
