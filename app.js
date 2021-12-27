// const data = ["max", "app", "lion"];
// data.push("org");

// // console.log(data[0]);
// // for (const d of data) {
// //   console.log(d);
// // }
// // const d = data.find((d) => d == "lion");
// // console.log(d, "hh");

// data.splice(2, 1);
// console.log(data);

// const data = new Set([]);
// data.add("abc");
// data.add("bcd");
// data.add("abc");

// for (const d of data) {
//   console.log(d);
// }

const person = {
  firstname: "adewale",
  lastname: "Agboola",
  hobbies: ["football", "history"],
};

person.age = 12;
delete person.hobbies;
console.log(person);
