function toHex(this: number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// ----------------------------------------------------------------------------

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
