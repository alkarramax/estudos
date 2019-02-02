var data = new Date();
console.log(data);
console.log(typeof data);

var dataString = new Date("2017-10-23");

console.log(dataString);
console.log(dataString.getFullYear());
console.log(dataString.getMonth()+1);
console.log(dataString.getDay());
console.log(dataString.getDate());
console.log(data.getHours());
console.log(data.getMinutes());

var dataParam = new Date(2019, 01, 25);
console.log(dataParam);

