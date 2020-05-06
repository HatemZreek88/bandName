const person1 = {
  firstName: "Ali",
  lastName: "Faw",
  age: 30,
  employed: true,
};
const person2 = {
  firstName: "Olga",
  lastName: "Dae",
  age: 40,
  employed: false,
};
const person3 = {
  firstName: "Zain",
  lastName: "Kal",
  age: 30,
  employed: true,
};
const person4 = {
  firstName: "Arina",
  lastName: "Dal",
  age: 50,
  employed: true,
};

const person = [person1, person2, person3, person4];
console.log(person);

const findEmployed = () => {
  let result = 0;
  for (let i = 0; i < person.length; i++) {
    if (person[i].employed) {
      result += 1;
    }
  }
  return `there are ${result} people working`;
};

console.log(findEmployed());

const findEmployeOver = () => {
  let result = [];
  for (let i = 0; i < person.length; i++) {
    if (!person[i].employed && person[i].age > 30) {
      result.push(person[i].firstName);
    }
  }
  return `${result} not working and over 30 years old`;
};

console.log(findEmployeOver());
