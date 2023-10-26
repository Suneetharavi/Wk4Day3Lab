//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 //Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
  //Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
  //Use that variable to add Kristyn's lost shoe to Thom's accessories array.

  let KristynsShoe=kristynsCloset.shift()  //i used shift as it is first element. or we should go by indexof()
  thomsCloset[2].push(KristynsShoe);
  console.log(kristynsCloset)
  console.log(thomsCloset)

  console.log("//////////////////////////")

  //Modify your code to put together 3 separate outfits for Kristyn and Thom. 
  //Put the output in a sentence to tell us what we'll be wearing. Mix and match!

  console.log(`Kristyns will be wearing: ${kristynsCloset[2]},${kristynsCloset[3]},${kristynsCloset[0]},${kristynsCloset[4]},${thomsCloset[2][0]}`)
  console.log(`Thom will be wearing: ${thomsCloset[0][2]},${kristynsCloset[3]},${thomsCloset[2][2]},${kristynsCloset[5]}`)

  console.log('///// Dirty Laundry ////')

kristynsCloset.forEach(item => {
    console.log("WHIRR: Now washing", item)
})

console.log('///// Inventory //////')

  //Thom wants to do inventory on his closet.
  // Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

  for(let p=0;p < thomsCloset.length;p++){
    //console.log(thomsCloset[0].length);
    for(let q=0;q<thomsCloset[p].length;q++){
        console.log(thomsCloset[p][q])
    }

  }
