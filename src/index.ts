type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

console.log(getName('Hi'));
console.log(getName(() => 'Hi'));

type Container<T> = { value: T };

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};

type LinkedList<T> = T & { next?: LinkedList<T> };

interface Person {
  name: string;
}

let people: LinkedList<Person> = {
  name: 'A',
  next: {
    name: 'B',
  },
};

let s = people.name;
s = people.next!.name;

type Alias = { num: number };
interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
