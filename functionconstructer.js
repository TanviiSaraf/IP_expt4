function Person(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.getFullName = function() {
return this.firstName + " " + this.lastName;
};
}
const person1 = new Person("Tanvi", "Saraf", 20);
console.log("Method 1:");
console.log("Full Name:", person1.getFullName());
console.log("Age:", person1.age);
