export{}
class ParentClass{
	name;
	setName(name){
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