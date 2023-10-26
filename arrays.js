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

for (i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log('FizzBuzz');
    }
    else if(i%3==0){
    console.log('Fizz')
    }
    else if(i%5==0){
    console.log('Buzz')
    }
    else
    console.log(i)
}
//committed with message "Fizz Buzz answered"



