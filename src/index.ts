function identity<T>(arg: T): T {
  return arg;
}

let output = identity('myString');
console.log(typeof output);

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

let output2 = loggingIdentity<number>([1, 2, 3]);
console.log(output2);

let myIdentity1: <T>(arg: T) => T = identity;
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: { <T>(arg: T): T } = identity;

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity4: GenericIdentityFn<number> = identity;

class GenericNumber<T> {
  zeroValue?: T;
  add?: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
console.log(myGenericNumber.add(5, myGenericNumber.zeroValue));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '';
stringNumeric.add = (x, y) => x + y;
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));

interface Lengthwise {
  length: number;
}

function loggingIdentityForLengthwise<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentityForLengthwise([1, 2, 3]);
loggingIdentityForLengthwise('12531235');
loggingIdentityForLengthwise({ length: 10, value: 3 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
// getProperty(x, "m"); // Error!

// * * *

class BeeKeeper {
  hasMask?: boolean;
}

class ZooKeeper {
  nametag?: string;
}

class Animal {
  numLegs?: number;
}

class Bee extends Animal {
  keeper?: BeeKeeper;
}

class Lion extends Animal {
  keeper?: ZooKeeper;
}

function createInstance<A extends Animal>(c: { new (): A }): A {
  return new c();
}

createInstance(Lion).keeper?.nametag;
createInstance(Bee).keeper?.hasMask;
