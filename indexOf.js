//USES FOR indexOf
// ==================

// Finding all the occurrences of an element

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// ============================

// Finding if an element exists in the array and updating the array if it doesn't

function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {  //if veggie doesn't exist in the array veggies
        veggies.push(veggie); //...push it into the array veggies
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

// =======
//  Test ||
// =======

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.

