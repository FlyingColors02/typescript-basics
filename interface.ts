//syntax
// interface interface_name{
// 	property_name: data_type,
// 	property_name: data_type,
// }

interface userType{
	name:string,
	age:number,
	getName:()=>string
}

let interfaceUser:userType ={
	name:'abcd',
	age:40,
	getName:function(){
		return 'xyz'
	}
}
console.log(interfaceUser);
console.log(interfaceUser.getName());


