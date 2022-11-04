// let string1 = "Halloween";

// let reverseString1 = string1.split('').reverse().join('');

// console.log(string1);
// console.log(reverseString1);

// could've also used a function

// const reverseStr = (str) => {
//     const strArray = str.split("");
//     const reverseStr = strArray.reverse();
//     const strJoin = reverseStr.join("");

//     return strJoin;
// }
// console.log(reverseStr(string1));

// have to turn the string into an array using split in order to reverse it. because there is no method to just reverse a string.

// const shoppingList = [              // more on this at start of html attributes recording.
//      food = [
//         "Steak",
//         "Mince",
//         "Burgers",
//     ],
//         drink = [
//             "water",
//             "Coke",
//             "orange juice",
//         ],
//             other = [
//                 "salt",
//                 "pepper",
//                 "toilet roll",
//             ]
// ]
// console.log(drink[1]);


const dataChecker = (string, rank) => {
    if (string == "codenation" && rank == 1){
        console.log(`Your ${string} rank is ${rank}.`);
    } else if (string == "codenation" && rank !== 1){
        console.log(`Your ${string} rank is not 1.`);
    } else {console.log(`Please enter relevant data.`)};
}
console.log(dataChecker("codenation", 1));