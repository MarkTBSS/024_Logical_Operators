"use strict";

let language = "english";
let population = 30;
let isIsland = false;
let country = "Ideal Land";

// The condition checks if the language is English, the population is less than 50 million, and it's not an island
if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
