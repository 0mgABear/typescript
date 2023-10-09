const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
//creating a brand new type

const pepsi: [string, boolean, number] = ["brown", true, 40];
//array, can swap the elements
// but defining the types of the elements make it a tuple
const sprite: Drink = ["brown", true, 40];
