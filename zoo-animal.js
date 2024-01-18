class Animal {
    constructor(name, species ) {
        this.name = name;
        this.species = species;
    }

}

class Mammal extends Animal{
    constructor(name, species,furColor) {
        super(name, species);
        this.furColor = furColor;
    }
}

class Bird extends Animal{
    constructor(name, species,wingSpan) {
        super(name, species);
        this.wingSpan = wingSpan;
    }
}

class Reptile extends Animal{
    constructor(name, species, scaleType) {
        super(name, species);
        this.scaleType = scaleType;
    }
}

class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    listAnimals() {
        this.animals.forEach(animal => {
            console.log(`${animal.name}`);
        });
    }

    getAnimalsBySpecies(species){
        return this.animals.filter(animal => animal.species === species);
    }
    removeAnimal(name) {
        this.animals = this.animals.filter(animal => animal.name !== name);
    }

    countAnimals() {
        return this.animals.length;
    }
}

const zoo = new Zoo();

const panda= new Mammal("Panda", "Bear", "Black and White");
const ara = new Bird("Ara", "Parrot", 112.5);
const gecko = new Reptile("Gecko", "Lizard","Imbricate");
const snake = new Reptile("Bearded dragon", "Lizard", "Spiny");

zoo.addAnimal(panda);
zoo.addAnimal(ara);
zoo.addAnimal(gecko);
zoo.addAnimal(snake);

console.log("\nAll animals in the zoo:");
zoo.listAnimals();

console.log("\nReptiles in the zoo:");
const reptiles = zoo.getAnimalsBySpecies("Lizard");
if (reptiles.length > 0) {
    reptiles.forEach(reptile => {
        console.log(`${reptile.name} - ${reptile.species}`);
    });
} else {
    console.log("\nNo reptiles found in the zoo.");
}


console.log("\nTotal animals in the zoo:", zoo.countAnimals());

console.log("\n")

zoo.removeAnimal("Ara");

zoo.listAnimals();
console.log("\nTotal animals in the zoo:", zoo.countAnimals());