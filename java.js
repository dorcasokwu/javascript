// console.warn("welcome to whoba foundation ");
// let Gender = 70;
// Gender = "female";
// console.log(Gender);
const FirstName = "Dorcas";
const LastName = "Chinyeaka";
const age = 30;
const IsAdmin = false;
const X = null;
const Y = undefined;
// console.log("my name is" + FirstName + LastName + "i am" + age + "years old");
// console.log(`my name is ${FirstName} ${LastName}i am ${age} years old`);
console.log(FirstName.toLowerCase());
const title = "Welcome, ICT, Laptop, router";
// console.log(title.length);
// console.log(title.toLocaleLowerCase());
console.log(title.split(","));
const student = ["web", "home", "kitchen", 6, true];
// student.push("table", "mouse");
// student[7] = "gate";
// to remove number you use pop
// student, pop();
student.unshift("computer");
console.log(student);
const person = {
  firstname: "Henry",
  lastname: "peter",
  score: 40,
  hobbies: ["cooking", "betting", "boxing"],
  adress: {
    city: "owerri",
    lga: "owerri-west",
    postalcode: 46013,
  },
};
console.log(person.firstname);
console.log(person.score);
console.log(person.adress.city);
const { firstname, lastname } = person;
// console.log(JSON.stringify(person));
