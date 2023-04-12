//it is difficult to make object type
let users={
	name:'abc',
	age:30,              //by default name is 'string', age is number and address is 'string'
	address:'USA'
}       
users.name='xyz';  //{ name: 'xyz', age: 30, address: 'USA' }
//users.email ='test@gmail.com' //o/p->Property 'email' does not exist on type '{ name: string; age: number; address: string; }'.

///can update a existing value(same type) but cannot add new value

//declare type in object
interface usersInterface{
	name:string,
	age:number,
	address:string,
	size:any
}

let users1: usersInterface={
	name:'lmn',
	age:20,
	address:'USA',      //{ name: 'lmn', age: 20, address: 'USA', size: 'large' }
	size:'large'
}
//users1.email='abc@gmail.com' //Property 'email' does not exist on type usersInterface.

let users2: usersInterface={
	name:'lmn',
	age:20,                //{ name: 'lmn', age: 20, address: 'USA', size: 30 }
	address:'USA',
	size: 30
}

let user3: any ={
	name:'lmn',
	age:20,                //{ name: 'lmn', age: 20, address: 'USA', size: 30 }
	address:'USA',
	size: 30
}

user3.name=100;         //{ name: 100, age: 20, address: 'USA', size: 30 }
user3.email='test@gmail.com'; //{ name: 100, age: 20, address: 'USA', size: 30, email: 'test@gmail.com'}
console.log(user3);