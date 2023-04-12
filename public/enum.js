"use strict";
//predefined set values  
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thurs"] = 3] = "thurs";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
let whichDay;
//console.log(whichDay = 'test'); //Type '"test"' is not assignable to type 'Days'
whichDay = 1;
console.log(whichDay); //1
whichDay = Days.wed;
console.log(whichDay); //2
var DaysValue;
(function (DaysValue) {
    DaysValue["mon"] = "monday";
    DaysValue["tue"] = "tuesday";
    DaysValue["wed"] = "wednesday";
    DaysValue["thurs"] = "thursday";
    DaysValue["fri"] = "friday";
    DaysValue["sat"] = "saturday";
    DaysValue["sun"] = "sunday";
})(DaysValue || (DaysValue = {}));
let whichDayItIs;
whichDayItIs = DaysValue.mon;
console.log(whichDayItIs); //monday
console.log(whichDayItIs === "monday"); //true
//console.log(whichDayItIs === "monday1"); //false
function whichDayFunction(day) {
    return day;
}
;
//console.log(whichDayFunction('test'));//Argument of type '"test"' is not assignable to parameter of type 'DaysValue'
console.log(whichDayFunction(DaysValue.mon));
var DaysExample;
(function (DaysExample) {
    DaysExample[DaysExample["mon"] = 10] = "mon";
    DaysExample[DaysExample["tue"] = 11] = "tue";
    DaysExample[DaysExample["wed"] = 12] = "wed";
    DaysExample[DaysExample["thurs"] = 13] = "thurs";
    DaysExample[DaysExample["fri"] = 14] = "fri";
    DaysExample[DaysExample["sat"] = 15] = "sat";
    DaysExample[DaysExample["sun"] = 16] = "sun";
})(DaysExample || (DaysExample = {}));
console.log(DaysExample.mon); //10
console.log(DaysExample.fri); //14 
//as we have initialized the value for one enum it following gets auto update
