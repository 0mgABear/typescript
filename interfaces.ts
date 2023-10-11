// Use capital letter
// Creating a new type
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (item: Reportable): void => {
  item.summary();
};
//can use printSummary on 2 very different kind of objects! Reusable code
//Make a generic looking interface

printSummary(oldCivic);
