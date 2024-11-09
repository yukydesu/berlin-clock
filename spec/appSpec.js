import { Main } from "../src/app.js";

const timestamp = 1672501199; // 16:39:59
//const timestamp = 1731192959; // 23:55:59
//const timestamp = 1731193199; // 23:59:59
//const timestamp = 1731106800; // 00:00:00

const date = new Date(timestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

let main = new Main();

let result = main.berlinClock(date);

console.log(result);


// TODO: Add more tests

