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

  console.log(`Kristyns attire be like: `)