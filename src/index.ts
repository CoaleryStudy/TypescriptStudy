interface Todo1 {
  title: string;
  description: string;
}

function updateTodo(todo: Todo1, fieldsTodoUpdate: Partial<Todo1>): Todo1 {
  return { ...todo, ...fieldsTodoUpdate };
}

const todo1: Todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2: Todo1 = updateTodo(todo1, {
  description: 'throw out trash',
});

// ----------------------------------------------------------------------------

interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 };
// Error : Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
const obj3: Required<Props> = { a: 5, b: '2' };

// ----------------------------------------------------------------------------

interface Todo3 {
  title: string;
}

const todo3: Readonly<Todo3> = {
  title: 'Delete inactive users',
};

// todo3.title = 'hello';
// Error : Cannot assign to 'title' because it is a read-only property.
console.log(todo3.title);

// ----------------------------------------------------------------------------

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};
