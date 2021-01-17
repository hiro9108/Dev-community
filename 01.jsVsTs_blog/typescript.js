"use strict";
// Can you guess the return value? -01
// const pikachu = (a: number, b: number): number => {
//   return a + b;
// }
// pikachu(2021, 9)
// string, number and boolean.
// const caterpie01: number = 2021;    // OK
// const caterpie02: number = false;   // NG
// const Metapod01: string = "sleepy"; // OK
// const Metapod02: string = true;     // NG
// const Wartortle01: boolean = true;  // OK
// const Wartortle02: boolean = 1111;  // NG
// null and undefined.
// const Butterfree: null = null;
// const ButterfreeNull: string = Butterfree;
// console.log(ButterfreeNull) // null
// const Kakuna: undefined = undefined;
// const KakunaNull: string = Kakuna;
// console.log(KakunaNull) //undefined
// any data type
// let pidgey: any = 1991;
// console.log(typeof pidgey) // number
// pidgey = "bird";
// console.log(typeof pidgey) // string
// pidgey = false;
// console.log(typeof pidgey) // boolean
// pidgey = null;
// console.log(typeof pidgey) // object
// pidgey = undefined;
// console.log(typeof pidgey) // undefined
// typescript can guess data types.
// const caterpie01: number = 2021;     // number
// const caterpie001 = 2021;            // number - typescript guess
// const Metapod01: string = "sleepy";  // string
// const Metapod001 = "sleepy";         // string  - typescript guess
// const Wartortle01: boolean = true;   // boolean
// const Wartortle001 = true;           // boolean  - typescript guess
// Do not define the return value's data type.
// const pikachu = (a: number, b: number) => {
//   return a + b;
// }
// pikachu(2021, 9);
// define object data type with interface.
// interface PokemonObj{
//   name: string,
//   age: number,
//   skill: string
// }
// assign data type directly to object.
// const pokemon: {name: string, age: number, skill: string} = {
//   name: "pikachu",
//   age: 6,
//   skill: "Electric Shock!"
// }
// change array data type
// const pokemon: string[] = ["pikachu", "Raichu", false];
// defined array with another way.
// const pokemon: Array<string> = ["pikachu", "Raichu", "Charizard"];
// // defined array with generics data type.
// type Pokemon<T> = T[];
// // After defined generics type, we can define specific data type.
// const pokemon: Pokemon<string> = ["pikachu", "Raichu", "Charizard"];
// Above code is the same as this.
// const pokemon: string[] = ["pikachu", "Raichu", "Charizard"];
// // defined array with generics data type.
// type Pokemon<T> = T[];
// // After defined generics type, we can define specific data type.
// const pokemon: Pokemon<string> = ["pikachu", "Raichu", "Charizard"];
// const pokemon: Pokemon<number> = [6, 14, 16];
// const pokemon: Pokemon<boolean> = [true, true, false];
// let pokemon: (string | number) = "pikachu";
// pokemon = 6;
// pokemon = false;      // NG
// define data type with array and union
// let pokemon: (string | number)[] = ["pikachu", "Raichu", 6, 14, false];
// define data type with array and tupple
// let pokemon01: [string, number] = ["pikachu", 6];      // OK
// let pokemon02: [string, number] = [6, "pikachu"];      // NG - Incorrect data type order.
// let pokemon03: [string, number] = ["pikachu", "text"]; // NG - Incorrect data type
// let pokemon04: [string, number] = ["pikachu", 6, 14];  // NG - Allow only two elements
