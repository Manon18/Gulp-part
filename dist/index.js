function countPersentage(percentage, number) {
  const MAXIMUM_PERCENTAGE_FROM_NUMBER = 100;

  return ((number / MAXIMUM_PERCENTAGE_FROM_NUMBER) * percentage).toFixed(1);
}

countPersentage(1000, 47.12);
