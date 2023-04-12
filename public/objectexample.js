"use strict";
//it is difficult to make object type
let users = {
    name: 'abc',
    age: 30,
    address: 'USA'
};
users.name = 'xyz'; //{ name: 'xyz', age: 30, address: 'USA' }
let users1 = {
    name: 'lmn',
    age: 20,
    address: 'USA',
    size: 'large'
};
//users1.email='abc@gmail.com' //Property 'email' does not exist on type usersInterface.
let users2 = {
    name: 'lmn',
    age: 20,
    address: 'USA',
    size: 30
};
let user3 = {
    name: 'lmn',
    age: 20,
    address: 'USA',
    size: 30
};
user3.name = 100; //{ name: 100, age: 20, address: 'USA', size: 30 }
user3.email = 'test@gmail.com'; //{ name: 100, age: 20, address: 'USA', size: 30, email: 'test@gmail.com'}
console.log(user3);
