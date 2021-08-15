interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo1, 'title' | 'completed'>;

const todo1: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

console.log(todo1);

// ----------------------------------------------------------------------------

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Omit<Todo2, 'description'>;

const todo2: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
};

console.log(todo2);

// ----------------------------------------------------------------------------

type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
// T0 = "b" | "c"

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
// T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
// T2 = string | number

// ----------------------------------------------------------------------------

type T3 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// T3 = "a"

type T4 = Extract<string | number | (() => void), Function>;
// T4 = () => void

// ----------------------------------------------------------------------------

type T5 = NonNullable<string | number | undefined>;
// T5 = string | number

type T6 = NonNullable<string[] | null | undefined>;
// T6 = string[]

// ----------------------------------------------------------------------------

type T7 = Parameters<() => string>;
// T7 = []

type T8 = Parameters<(s: string) => void>;
// T8 = [s: string]

type T9 = Parameters<<T>(arg: T) => T>;
// T9 = [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T10 = Parameters<typeof f1>;
// T10 = [arg: {a: number; b: string;}]

// 그 외에 ConstructorParameters, ReturnType, InstanceType
