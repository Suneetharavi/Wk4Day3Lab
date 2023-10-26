//Write a for loop that will log the numbers 1 through 20.
    for (let l=0;l<=20;l++){
        console.log(l)
    }
// committed with message "Easy Going answered"
console.log('///////////////////////////////////////////////////')
//Write a for loop that will log only the even numbers in 0 through 200.
    console.log("The Even numbers from 0 to 200\n")
    for(let i=0;i<=200;i+=2){ 
        console.log(i);
    }
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

// Porgee decides that Wolfy can't be named "Wolfy" anymore.
// Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0]='Gameboy'
console.log(wolfy)

//committed with message "Wild Wild Life answered"
 console.log('///////////////////////////////////////////////////')

//Create an array with the members
// of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

let turtles = ['Donatello','Leonardo','Raphael','Michaelangelo']
console.log(turtles)
//Use a for of loop(not a typo - try it out! Try a for ofloop) 
//to call toUpperCase()on each of them and print out the result.
console.log("The turtles in Uppercase")
for (const element of turtles) {
    console.log(element.toUpperCase()); 
  
  }
//commited with message "Yell at the Ninja Turtles answered"
console.log('///////////////////////////////////////////////////')

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(`\nThe index of Titanic movie is ${favMovies.indexOf('Titanic')}`)

//use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
//  The sort() sorts the elements of an array.
//  The sort() overwrites the original array.
//  The sort() sorts the elements as strings in alphabetical and ascending order.
console.log("After Sorting")
favMovies.sort();
console.log(favMovies)

//Use the method pop . Pop() removes the last element in an array .Here it removes 'Volver' as it is the last element
console.log("After Pop")
favMovies.pop()
console.log(favMovies)

//push "Guardians of the Galaxy" .method adds new items (Guardians of the Galaxy) to the end of an array.
console.log("PUSH a new movie: Guardians of the Galaxy")
favMovies.push('Guardians of the Galaxy')
console.log(favMovies)
//Reverse the array . reverse() method reverses the order of the elements in an array.
console.log("Reverse of an array")
favMovies.reverse()
console.log(favMovies)

//Use the shiftmethod. shift() method removes the first item of an array.The shift() method returns the shifted element.

console.log('After using Shift')
favMovies.shift()
console.log(favMovies)

//unshift- what does it return?. The unshift() method adds new elements to the beginning of an array.
console.log('unshift() method returns the new length of the array')
console.log('After using UnShift')
favMovies.unshift("Rabbit")
console.log(favMovies)
console.log(`Unshift returns the new length of the array: ${favMovies.unshift("Hero")}`)
console.log(favMovies)

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
//Thought question: did this permanently alter our array? -yes
// The splice() method adds and/or removes array elements.splice() method overwrites the original array.
console.log('After using Splice ,removed Django Unchained and added Avatar')
favMovies.splice(favMovies.indexOf('Django Unchained'),1,'Avatar')
console.log(favMovies)

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - 
//Thought question: did this permanently alter our array? -NO
// store the value of your slicein a variable, console.log it - 
// Thought question: what is going on here?
// console.log your final results
console.log('/nAfter using Slice to remove last half of the array')
//console.log(`The sliced part of the array:\n ${favMovies.slice(favMovies.length/2,favMovies.length)}`)
const slicedpart=favMovies.slice(favMovies.length/2,favMovies.length)
console.log(slicedpart)
console.log("\nThe array doesn't change after using slice()")
console.log(favMovies)

console.log('\nThe slice() method returns selected elements in an array, as a new array.')
console.log('It selects from a given start, up to a (not inclusive) given end.')
console.log('The slice() method does not change the original array.\n')

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, 
//what value do we get when we look for the index of something that is not in the array?

console.log(favMovies.indexOf('Fast and Furious'))
//Removing the 'Fast and Furious' from the Array
delete favMovies[favMovies.indexOf('Fast and Furious')]
//now consoling the index of removed element 'Fast and Furious'
console.log(favMovies.indexOf('Fast and Furious'))
console.log(favMovies.indexOf('Fast '))
console.log(favMovies.indexOf('Fnd Furious'))
//what value do we get when we look for the index of something that is not in the array?
//this returns -1
console.log('\nThe indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.')

//Thought question: that we declared the variable favMovieswith const, and yet,
// we were allowed to change the array. Weird? Should we have used let?
//  Answer: The const keyword doesn't allow reassignment, which means that you cannot reassign the array with some other data(assign a string to it for example). 
// That doesn't mean that you can't mutate the elements of the array. You can remove, add new elements and change 
// existing elements in the array. The array's contents remain mutable.
//My understanding is that const in this example means the variable can't be reassigned not that you can't manipulate it.So using Const is not wrong.

//Commited with message "Methods Revisited answered"
console.log('///////////////////////////////////')
//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];
console.log("\nWhere is Waldo Array")
//Remove Eggbert (hint look at the slice/splice method(s))
console.log(`\nBefore slice \n ${whereIsWaldo}`)
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'),1)
console.log(`\nAfter Slice\n ${whereIsWaldo}`)

//Change "Neff" to "No One"
whereIsWaldo[1][2]='No One'
console.log(whereIsWaldo)

//committed with mesg "Where is Waldo answered"
console.log('///////////////////////////////////')
//Excited kitten
const KittyTalk = ["...human...why you taking pictures of me?...", 
 "...the catnip made me do it...", 
 "...why does the red dot always get away..."
]
 for(let k=0;k<=20;k++){
       console.log("Love me, pet me! HSSSSSS!")
     let talkingPoint = Math.floor(Math.random() * (KittyTalk.length+1));  
        if(k%2==0){
            console.log(KittyTalk[talkingPoint])
        }
        else{
            console.log(k)
        }
 }
 //commited with message "Excited Kittens answered"
 console.log('///////////////////////////////////')

//Find the Median..The median formula is {(n + 1) ÷ 2} if n is odd. if n is even- ((n/2)+((n/2)+1))/2

 const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
    nums.sort();
    console.log('\n The median of the given array')
    if(nums.length%2 == 0)
    console.log((nums[Math.floor(nums.length/2)]+nums[Math.floor((nums.length+1)/2)])/2);
    else
    console.log(nums[Math.floor((nums.length+1)/2)]);

//commited with message "Find the Median answered"






    


















