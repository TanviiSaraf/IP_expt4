class Person {
constructor(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
}
getFullName = () => {
return this.firstName + " " + this.lastName;
}
}
const person2 = new Person("Tanvi", "Saraf", 20);
console.log("Full Name:", person2.getFullName());
console.log("Age:", person2.age);
