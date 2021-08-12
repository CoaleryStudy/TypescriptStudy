function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): Array<T[K]> {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014,
};

let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);

let modelYear = pluck(taxi, ['model', 'year']);

interface Person {
  name: string;
  age: number;
  gender: string;
}

type PartialPerson = Partial<Person>;

type Hi = keyof 'prop1' | 'prop2' | 'prop3';

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;

declare function f<T extends boolean>(x: T): T extends true ? string : number;

let x = f(Math.random() < 0.5);
