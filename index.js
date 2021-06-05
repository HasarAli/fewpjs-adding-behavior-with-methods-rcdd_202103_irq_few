// Your code here

class Animal {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  
  speak(sound) {
    return `${this.name} says ${sound}!`
  }
}

class Cat extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  
  speak() {
<<<<<<< HEAD
    return super.speak('meow')
=======
    super('meow')
>>>>>>> e525a1011e5ef479ecac4ba291e11ac1b01d424d
  }
}

class Dog extends Animal {
  constructor(name, sex) {
<<<<<<< HEAD
    super(name, sex)
  }
  
  speak() {
    return super.speak('woof')
=======
    return super(name, sex)
  }
  
  speak() {
    return super('woof')
>>>>>>> e525a1011e5ef479ecac4ba291e11ac1b01d424d
  }
}

class Bird extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  
  speak() {
    if (this.sex === 'male') 
<<<<<<< HEAD
      return `It's me! ${this.name}, the parrot!`
=======
      return `It's me! ${this.name} the parrot`
>>>>>>> e525a1011e5ef479ecac4ba291e11ac1b01d424d
    else
      return `${this.name} says squawk!`
  }
}