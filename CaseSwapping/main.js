// Given a string, swap the case for each of the letters.

// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

function swap(str) {
  let editedString = [];

  const stringArray = [...str];

  stringArray.map((letter) => {
    letter == letter.toUpperCase()
      ? editedString.push(letter.toLowerCase())
      : editedString.push(letter.toUpperCase());
  });

  return editedString.join("");
}

console.log(swap("HelloWorld"));