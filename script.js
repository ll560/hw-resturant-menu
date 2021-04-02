let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    highInCalories: false,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    numIngredients: function() {
    return this.ingredients.length;
    }
}
//1 year salad was added
menuItem.yearAdded = 2017;
console.log(menuItem);

//2 track when dish is available: lunch and dinner
menuItem.dishAvailable = ["lunch", "dinner"];
console.log(menuItem);

//3 take out high in calorie info and add amount of calories
delete menuItem.highInCalories;
console.log(menuItem);

menuItem.amountOfCalories = "560 calories";
console.log(menuItem);

//4 remove the nickname 
delete menuItem.nickName;
console.log(menuItem);

//5 add lemon juice ingredient
menuItem.ingredients.push("Lemon Juice");
console.log(menuItem);

 
console.log("\n\n******menuItem Object******");
Object.entries(menuItem).forEach(([key, value]) => {
if (key != 'numIngredients')
console.log( `${key}: ${value}`)
});
console.log( `Number of ingredients = ${menuItem.numIngredients()}`);


//How would I get this console log output to print in the html document with a oneclick button?
// document.getElementById("demo").innerHTML = myFuction;
