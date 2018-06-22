const innerLodashName = document.getElementById('inner-lodash-name');
const innerLodashAge = document.getElementById('inner-lodash-age');

var person = {
  name: 'Cat',
  age: 3
}

_.each(person, function(item){
  innerLodashName.innerHTML = "Name: " + person.name + " " + "Age: " + person.age;
});

_.reduce([7, 8, 9, 10], function(memo, item) {
  return res = memo + item;
}, 0);

console.log("Reduce method. Result = " + res);

// Additional methods. Please, enter in browser console these methods, to see results

_.every([{id: 1, name: 'John', isActive: true}, {id: 2, name: 'Anna', isActive: true}], function(item){
  return item.isActive === true;
});

_.some([{id: 1, name: 'Fred', isActive: false}, {id: 2, name: 'Robert', isActive: true}], function(item){
  return item.isActive;
});

_.without([1,2,3], 1,2);

_.sortBy([{id:1, name: 'Petro', age: 45}, {id:2, name: 'Ivan', age: 35}, {id:3, name: 'Tony', age: 25}], function(item){
  return item.age;
});

_.groupBy([{name: 'Bill', isActive: false}, {name: 'David', isActive: true}, {name: 'Tom', isActive: true}], function(item){
  return item.isActive;
});

_.filter([5,6,7,8,9], function(item){
  return item >= 7;
});

_.find([{name: 'user1', age: 17}, {name: 'user2', age: 27}], function(item){
  return item.name === 'user1';
});

_.map([{name: 'id1'}, {name: 'id2'}, {name: 'id3'}], function(item){
  return item.name;
});
