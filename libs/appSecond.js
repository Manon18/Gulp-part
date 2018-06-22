function recursionFunc(number){
  if(number >= 0) {
    recursionFunc(number - 1);
  }
}
recursionFunc(10);
