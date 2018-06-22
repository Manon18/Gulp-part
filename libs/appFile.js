function factorial(number) {
  var res = 1;
  for(var i = 1; i <= number; i++) {
    res *= i;
  }
  return res;
}

factorial(5);