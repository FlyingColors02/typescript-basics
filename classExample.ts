class Example{
	constructor(params){
		
		console.log("constructor called",params);
		
	}
	name='abc';//property
	//function
	getName(){
		console.log(this.name);
		
	}
}

//object
let exampleObject = new Example('xyz');
exampleObject.getName();

//result
//constructor called xyz
//abc



class Example1{
	name:string='abc'; //property
	constructor(params){ //function
		this.name=params;
		console.log("constructor called",this.name);
		
	}
	
	//function
	getName():void{
		console.log(this.name);
		
	}
}

//object
let exampleObject1 = new Example1('xyz');
exampleObject1.getName();

//result
// constructor called xyz
// xyz