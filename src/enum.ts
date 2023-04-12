//predefined set values  
 
enum Days{
	mon, tue, wed, thurs, fri, sat, sun
}

let whichDay : Days;
//console.log(whichDay = 'test'); //Type '"test"' is not assignable to type 'Days'
whichDay = 1;
console.log(whichDay ); //1
whichDay = Days.wed;
console.log(whichDay);//2


enum DaysValue{
	mon='monday',
	tue='tuesday',
	wed='wednesday',
	thurs='thursday',
	fri='friday',
	sat='saturday',
	sun='sunday'
}

let whichDayItIs : DaysValue;
whichDayItIs = DaysValue.mon;
console.log(whichDayItIs); //monday
console.log(whichDayItIs === "monday"); //true
//console.log(whichDayItIs === "monday1"); //false


function whichDayFunction(day: DaysValue){
	return day;
};
//console.log(whichDayFunction('test'));//Argument of type '"test"' is not assignable to parameter of type 'DaysValue'

console.log(whichDayFunction(DaysValue.mon));

enum DaysExample{
	mon=10, tue, wed, thurs, fri, sat, sun
}

console.log(DaysExample.mon); //10
console.log(DaysExample.fri); //14 
//as we have initialized the value for one enum it following gets auto update
