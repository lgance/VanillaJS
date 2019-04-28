"use strict";
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}
let user = new Student("first", "second", "last");
console.log("test");
function show(param) {
    param.firstName.indexOf;
    return ("Hello : " + param.firstName + " " + param.middleName + " " + param.lastName);
}
let show_ = show(user);
console.log(show_);
