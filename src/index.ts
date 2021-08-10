function f(x: number, y?: number) {
  return x + (y || 0);
}

console.log(f(1, 2));
console.log(f(1));
console.log(f(1, undefined));
// console.log(f(1, null)); // Error!

class C {
  a: number;
  b?: number;

  constructor(a: number) {
    this.a = a;
  }
}

let c = new C(1);
c.a = 12;
// C.a = undefined; // Error!
c.b = 13;
c.b = undefined;
// c.b = null; // Error!

function f2(sn: string | null): string {
  return sn || 'default';
}

console.log(f2(null));
console.log(f2('Hello'));

function f3(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '. the ' + epithet;
  }
  name = name || 'Bob';
  return postfix('great');
}

console.log(f3('Hello'));
console.log(f3(null));
