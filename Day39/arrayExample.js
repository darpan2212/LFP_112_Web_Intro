let origDogs = ["BullDog", "Beagle", "Labrador", "Pug"];
let cats = new Array("American Curls", "Bengal");
let birds = ["Falcon", "Ducks", "Flamingoes"];

console.log(origDogs);
console.log(cats);

let sliceDogs = origDogs.slice(0, 3);
console.log(sliceDogs);

let copyDogs = [...origDogs];
console.log(copyDogs);

let dogs = origDogs.slice(2);
console.log(dogs);

origDogs.push("Golden Retriever");
console.log(origDogs);

let selectedDog = origDogs.pop();
console.log(selectedDog);
console.log(origDogs);

dogs[dogs.length] = "Poodle";
console.log(dogs);

let addFirst = dogs.unshift("Golden Retriever");
console.log(dogs);
let shiftDog = dogs.shift();
console.log(dogs);
console.log(shiftDog);

dogs.splice(2, 1, "Huskey", "Boxer");
console.log(dogs);

let animals = dogs.concat(birds, cats);
console.log(animals);

let newAnimals = [...dogs, ...cats, ...birds];
console.log(newAnimals);

let sortDogs = dogs.sort();
console.log(sortDogs);

function scanArray([first, second]) {
    console.log("Scan : " + first + " " + second);
}

scanArray(animals);

let joinAnimals = animals.join("|");
console.log(joinAnimals);

let allAnimals = "";

for (let a of animals) {
    allAnimals += a + " ";
}

console.log(allAnimals);