function Cals(){  
	return 10+10;      //default
}

console.log(Cals()); //20


function Calss():number{  //return type number
	// return 'hello';   //Type 'string' is not assignable to type 'number'.
	return 10+10;
}
console.log(Calss()); //20


function stringType():string{  //return type string
	return 'hello world!!'
}
console.log(stringType()); //hello world!!


function withParams(a):number{
	return a;                         //as a's type is not defined can pass any data type and return as well
}
console.log(withParams(10)); //10
console.log(withParams('hello')); //hello

function withParamsAndDataType(a:number):number{
	return a;
}

console.log(withParamsAndDataType(10)); //10
//console.log(withParamsAndDataType('hello')); //Argument of type 'string' is not assignable to parameter of type 'number'.

function withParams1(a:number, b?:number):number{ // ? implies optional
	return b?a+b:a;
}

console.log(withParams1(10,10));
console.log(withParams1(10));


