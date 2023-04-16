// let role:string[] | number[]=['admin','manager', 3, 4];

//error: 
// Type '(string | number)[]' is not assignable to type 'string[] | number[]'.
  // Type '(string | number)[]' is not assignable to type 'string[]'.
	// Type 'string | number' is not assignable to type 'string'.
	// 	Type 'number' is not assignable to type 'string'.


	//to solve this
	let role:[string,string,number, number,boolean?] = ['admin','manager', 3, 4];
	role.push(true, 3);
	console.log(role);
	