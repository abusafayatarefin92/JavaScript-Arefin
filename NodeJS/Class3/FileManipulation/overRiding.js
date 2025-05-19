class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); // Output: The animal makes a sound.
dog.speak();    // Output: The dog barks.
