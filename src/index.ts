interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return 'swim' in pet;
}

function doIt(pet: Fish | Bird): void {
  if (isFish(pet)) {
    pet.swim(); // Pet is Fish
  } else {
    pet.fly(); // Pet is Bird
  }
}

// -----------------------------------------------------------------------

function padLeft(value: string, padding: string | number): string {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  } else if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// -----------------------------------------------------------------------

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString(): string {
    return this.value;
  }
}

function getRandomPadder(): SpaceRepeatingPadder | StringPadder {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder(' ');
}

let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  console.log('SpaceRepeatingPadder');
  console.log(padder.getPaddingString() + '안녕');
} else if (padder instanceof StringPadder) {
  console.log('StringPadder');
  console.log(padder.getPaddingString() + '안녕');
}
