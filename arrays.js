//Write a for loop that will log the numbers 1 through 20.
// for (let i=0;i<=20;i++){
//     console.log(i)
// }
// committed with message "Easy Going answered"
console.log('///////////////////////////////////////////////////')
//Write a for loop that will log only the even numbers in 0 through 200.
// console.log("The Even numbers from 0 to 200\n")
// for(let i=0;i<=200;i+=2){ 
//     console.log(i);
// }
console.log('///////////////////////////////////////////////////')
//committed with message "Get Even answered" 
//If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log('FizzBuzz');
//     }
//     else if(i%3==0){
//     console.log('Fizz')
//     }
//     else if(i%5==0){
//     console.log('Buzz')
//     }
//     else
//     console.log(i)
// }
// //committed with message "Fizz Buzz answered"
// console.log('///////////////////////////////////////////////////')
//(name,species ,age, hometown):
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.

console.log(`\nPlantee age ${plantee[2]}`);
plantee[2]++;
console.log(`\nHappy Birthday Plantee.Your age is up. Now your age is: ${plantee[2]}`)

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy[3]='Gotham City'
console.log(`\nWolf's new city is ${wolfy[3]}`)

//Give D'Art a second hometown by adding "Hawkins"

dart.push('Hawkins')
console.log("\nD'Art had a second city added")
console.log(dart)

// /Porgee decides that Wolfy can't be named "Wolfy" anymore.
// Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0]='Gameboy'
console.log(wolfy)
