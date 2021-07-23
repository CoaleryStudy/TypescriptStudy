interface SquareConfig {
  color?: string;
  width?: number;
}

interface LabeledValue {
  label: string;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

const myObj2 = { colour: 100, width: 100 };
let mySquare = createSquare(myObj2);
let mySquare2 = createSquare({ width: 100, colour: 'Color' } as SquareConfig);

const myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
