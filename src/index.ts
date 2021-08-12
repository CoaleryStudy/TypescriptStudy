interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}

// ---------------------------------------------

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentvalue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }

  public sin(): this {
    this.value = Math.sin(this.value);
    return this;
  }
}

let v = new ScientificCalculator(2).multiply(5).sin().add(1).currentvalue();
console.log(v);
