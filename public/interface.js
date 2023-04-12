"use strict";
//syntax
// interface interface_name{
// 	property_name: data_type,
// 	property_name: data_type,
// }
let interfaceUser = {
    name: 'abcd',
    age: 40,
    getName: function () {
        return 'xyz';
    }
};
console.log(interfaceUser);
console.log(interfaceUser.getName());
