type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    }
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');
// button.animate(0, 0, 'uneasy'); // Error!

// ------------------------------------------------------------

interface SomeElement {}

function createElement(tagName: 'img'): SomeElement;
function createElement(tagName: 'input'): SomeElement;
function createElement(tagName: string): SomeElement {
  console.log(tagName);
  return {};
}
createElement('img');
createElement('input');
// createElement('some'); // Error!

// ------------------------------------------------------------

type DiceResult = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice(): DiceResult {
  const diceResult = Math.random() * 6 + 1;
  return diceResult as DiceResult;
}

console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
