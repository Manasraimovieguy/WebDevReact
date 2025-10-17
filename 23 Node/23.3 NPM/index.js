// const generateName = require("sillyname"); // this is one way of importing library, uses CJS, i.e. CommonJS
// below is the more commonly used ECMA Script method
import generateName from "sillyname"; // here generateName itself is the only function provided from library to import so we don't need to enclose in flower brackets

const name = generateName();
console.log(`Can the real ${name} please stand up`);

// test, random superhero names

import {randomSuperhero} from "superheroes";
const name2 = randomSuperhero();
console.log(`I, ${name2} will save the day, like the jackass that I am`);