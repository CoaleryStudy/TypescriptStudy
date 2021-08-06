function extend<S extends {}, T extends {}>(first: S, second: T): S & T {
  const result: Partial<S & T> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as S)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as T)[prop] = second[prop];
    }
  }
  return result as S & T;
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}

const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);
console.log(typeof jim);
