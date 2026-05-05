console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

console.log("\nWHILE LOOP:");
let j = 1;
while (j <= 5) {
    console.log("Number:", j);
    j++;
}

console.log("\nFOR...OF LOOP:");
let skills = ["Java", "Selenium", "JS"];

for (let skill of skills) {
    console.log("Skill:", skill);
}

console.log("\nFOR...IN LOOP:");
let person = {
    name: "Prudhvi",
    age: 25
};

for (let key in person) {
    console.log(key + ":", person[key]);
}