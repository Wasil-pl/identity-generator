const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = ['John', 'Michael', 'William', 'David', 'James', 'Joseph', 'Daniel', 'Matthew', 'Anthony', 'Robert'];
const femaleNames = [
  'Mary',
  'Jennifer',
  'Linda',
  'Patricia',
  'Elizabeth',
  'Susan',
  'Jessica',
  'Sarah',
  'Karen',
  'Nancy',
];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Wilson', 'Anderson'];
const people = [];

const randChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generatePhoneNumber = () => {
  const digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  return `${digits.slice(0, 3).join('')}-${digits.slice(3, 6).join('')}-${digits.slice(6).join('')}`;
};

const minAge = 18;
const maxAge = 60;

for (let i = 0; i <= 20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'F' ? randChoice(femaleNames) : randChoice(maleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  const phoneNumber = generatePhoneNumber();

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    phoneNumber: phoneNumber,
  };

  people.push(person);
}

const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
