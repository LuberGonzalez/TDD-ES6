import pkg from "lodash";
const { isEqual } = pkg;
import { getLetterCount } from "./letter-count.js";

// export const angrams = ({ keyOne, keyTwo }) => {
//   // console.log(keyOne);
//   const wordOne = keyOne.split("").sort();
//   const wordTwo = keyTwo.split("").sort();

//   // console.log(wordOne === keyTwo.split(""))
//   // console.log(wordTwo === keyOne.split(""))

// //   console.log(wordOne);
// //   console.log(wordTwo);

//   let isAnagram = true;

//   for (let i = 0; i < wordOne.length; i++) {
//     if (wordOne[i] !== wordTwo[i]) {
//       isAnagram = false;
//       break;
//     }
//   }

//   return {
//     keyOne,
//     keyTwo,
//     isAnagram,
//   };
// };

export const angrams = (keyOne, keyTwo) => {
  const wordOne = getLetterCount(keyOne);
  const wordTwo = getLetterCount(keyTwo);

  //   return wordOne.every((letter) => wordTwo.includes(letter)) && wordTwo.every((letter) => wordOne.includes(letter));

  return isEqual(wordOne, wordTwo);
};
