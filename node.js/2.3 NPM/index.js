var generateName = require("sillyname");

var sillyname = generateName();
console.log(`my name is ${sillyname}`);

var generateName2 = require("sillyname");
var sillyname2 = generateName2();

console.log(`my name is ${sillyname2}`);

if(sillyname === sillyname2){
    console.log("both names are same");
}else{
    console.log("both names are different");
}