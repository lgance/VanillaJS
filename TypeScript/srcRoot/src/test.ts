class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}
interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
}

let user = new Student("first", "second", "last");
console.log("test");
function show(param: Person) {
  param.firstName.indexOf;
  return (
    "Hello : " + param.firstName + " " + param.middleName + " " + param.lastName
  );
}
let show_ = show(user);
console.log(show_);
as;
let test = "test";
