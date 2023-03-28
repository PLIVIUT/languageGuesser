import { franc, francAll } from "franc";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const langCode = franc(input);

// if (langCode === "und") {
//     console.log("Sorry! I can't seem to guess the language.".red)
// }
// else {
//     const language = langs.where("3", langCode);
//     console.log(`The language name is: ${language.name}`.green);
// }

try {
    const language = langs.where("3", langCode);
    console.log(`The language name is: ${language.name}`.green);
} catch (error) {
    console.log("Sorry! I can't seem to guess the language.".red)
    console.log(`This is the error: ${error}`);
}