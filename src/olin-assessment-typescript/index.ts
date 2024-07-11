// 1. Basic Types
const getLength = (text: string): number => {
  return text.length;
};

console.log(getLength("Hello World!"));

// 2. Interfaces
interface Person {
  name: string;
  age: number;
}

const greeting = (person: Person): string => {
  return `Hello, ${person.name}! i'am ${person.age} years old.`;
};

const person = {
  name: "aris",
  age: 25,
};

console.log(greeting(person));

// 3. Generics
function identity<Type>(arg: Type): Type {
  return arg;
}

const name = identity<string>("Aris Kiflan");
console.log(name);
const age = identity<number>(25);
console.log(age);

// 4. Union Types
type Input = string | number;

const toString = (input: Input): string => {
  return input.toString();
};

console.log(toString(25));
console.log(toString("aris kiflan"));
