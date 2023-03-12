//their are possibilities a variable may be of different data types
var unionData = 'abc';
//unionData = 100; //error
var unionData1 = 'abc';
unionData1 = 100;
//but any is not a good solution as we want only some specific data type
var unionData2 = 'abc';
unionData2 = 100;
console.log(unionData2);
