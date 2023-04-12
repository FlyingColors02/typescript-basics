"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParentClass {
    setName(name) {
        this.name = name;
    }
}
class ChildClass extends ParentClass {
    getName() {
        return this.name;
    }
}
let childObject = new ChildClass();
childObject.setName('abc');
console.log(childObject.getName());
//if child class does not extend parent then cannot setName using child object
