let test1 : string| number = 'hello'; //union type....here variable data type can be string or number
let test2 : 'abc'| 123 ='abc'; //literal type ... here variable either can be abc or 123 no other value will be accepted

function combine(a: string|number, b:string|number){
	if(typeof a == 'number' && typeof b == 'number'){
		return a+b;
	}else{
		return a.toString() + b.toString();
	}

}

console.log(combine(10,20)); //30
console.log(combine('abc','def')); //abcdef


let type :'number'|'string';
function combine1(a: string|number, b:string|number, type:string){
	if(type=='number'){
		return (+a)+(+b);
	}else{
		return a.toString() + b.toString();
	}

}

console.log(combine1(10,20,'number')); //30
console.log(combine1('abc','def','string')); //abcdef