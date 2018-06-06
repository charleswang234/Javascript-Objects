
// a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

// function countLetters(word) {
//   var letterOccurrences = {};
//   wordNoSpaces = word.split(' ').join("");
//   for (var i = 0; i < wordNoSpaces.length; ++i) {
//     var currentCharacter = wordNoSpaces.charAt(i);
//     if (letterOccurrences[currentCharacter] === undefined) {
//       letterOccurrences[currentCharacter] = 1;
//     } else {
//       letterOccurrences[currentCharacter] += 1;
//     }
//   }
//   return letterOccurrences;
// }


function countLetters(string) {
  var strCount = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    } else if (strCount[string[i]] === undefined) {
      strCount[string[i]] = 1;
    } else {
      strCount[string[i]] ++;
    }
  }
  return strCount;
}

console.log(countLetters("lighthouse in the house"));

//console.log(countLetters("lighthouse in the house"));