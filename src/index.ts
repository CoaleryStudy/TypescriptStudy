interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};
