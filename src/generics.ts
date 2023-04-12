//create a generic func whe want to use again and again

export function genericExample(data:string):string{
	return data;
}

console.log(genericExample('abc'));

//output- anil
//but if pass integer value it will throw error
//console.log(genericsExample(30)); // Argument of type 'number' is not assignable to parameter of type 'string

//To solve this
export function genericFunExample<T>(data:T):T{
	return data;
}
console.log(genericFunExample('xyz'));
console.log(genericFunExample(30));

