// Interface Segregation Principle

// Объект не должен наследоваться от класса, если он не использует его методы/функционал
// Много специфичных интерфейсов лучше, чем один общего назначения

class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} swim`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} walk`)
  }
}

const flier = {
  fly() {
    console.log(`${this.name} fly`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Bets')
dog.walk()
dog.swim()

const eagle = new Eagle('Eagle')
eagle.fly()
eagle.walk()

const whale = new Whale('Big blue pal')
whale.swim()