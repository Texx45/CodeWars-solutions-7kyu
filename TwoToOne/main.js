// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const joinedStrings = [...s1, ...s2];
  const uniqueString = [...new Set(joinedStrings)].sort().join("");

  return uniqueString;
}

console.log(longest("aretheyhere", "yestheyarehere")) // aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // abcdefghilnoprstu