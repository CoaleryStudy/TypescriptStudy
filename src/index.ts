let arr: Array<number> = [1, 2, 3];
let x: [string, number] = ['Hello', 10];
console.log(x);

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let color: Color = Color.Red;
console.log(color);

console.log(Color[color]);

let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;

console.log(strLength);
