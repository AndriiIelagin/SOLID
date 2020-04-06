// Open Close Principle

// open for extension close for modification

class Shape {
  area() {
    throw new Error('It\'s better to write appropriate logic for the specific shape')
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return (this.radius ** 2) * Math.PI
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.size = size
  }

  area() {
    return this.size ** 2
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area()
      return acc
    }, 0)
  }
}

const areaCalc = new AreaCalculator([
  new Circle(5),
  new Square(4)
])
console.log(areaCalc.sum())