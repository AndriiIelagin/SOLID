// Liskov Substitution Principle

// Наследующий класс должен дополнять, а не изменять базовый
// Объекты в программе должны быть заменяемыми на экземпляры их типов 
// без изменения правильности выполнения программы

class Animal {
  constructor(kind) {
    this.kind = kind
  }
  speak() {
    return `${this.kind} speaks`
  }
}

class Dog extends Animal {
  constructor(kind, name) {
    super(kind)
    this.name = name
  }
}

const animal = new Animal('Tiger')
const dog = new Dog('dog', 'Bets')
console.log(animal.speak())
console.dir(dog)
console.log(dog.speak())