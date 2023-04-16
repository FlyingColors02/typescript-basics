export{}
class ParentClass{
  
		name='abc';
	setName(name:string){
		this.name=name;
	}
}

class ChildClass extends ParentClass{
	
	getName():string{
		return this.name;
	}
}
let childObject = new ChildClass();
childObject.setName('abc');
console.log(childObject.getName());

//if child class does not extend parent then cannot setName using child object