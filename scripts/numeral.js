const currencyRes = document.getElementById('currency');
const percentagesRes = document.getElementById('percentages');
const timeRes = document.getElementById('time');
const differenceRes = document.getElementById('difference');

const currency = numeral(1000.879).format('$0.00');

currencyRes.innerHTML = "1000.879 = " + currency;

const percentages = numeral(0.928345736).format('0.000%');

percentagesRes.innerHTML =  "0.928345736 = " + percentages;

const time = numeral(34).format('00:00:00');

timeRes.innerHTML = "34 = " + time;

const number = numeral(700);
const value  = 200;
const difference = number.difference(value);

differenceRes.innerHTML = "Number = 700. Value = 200. Difference = " + difference;
