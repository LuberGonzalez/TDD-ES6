import { expect } from "chai";
import { angrams } from "./anagrams.js";

describe("ANAGRAM - basic- funcionality", () => {
  // it("returns an empty object when passed an empty string", () => {
  //     const expected = {};
  //     const actual = angrams({propiedad:""});
  //     expect(actual).to.deep.equal(expected);
  //   });

  //   it("returns true if key one and key two are agrams", () => {
  //     const expected = {
  //         keyOne:"cosa",
  //         keyTwo:"saco",
  //         isAnagram: true
  //     };
  //     const actual = angrams({keyOne:"cosa",keyTwo:"saco"});
  //     expect(actual).to.deep.equal(expected);
  //   });

  it("returns true when two known anagrams are passed in", () => {
    const expected = true;
    const actual = angrams("listen", "silent");
    expect(actual).to.equal(expected);
  });

  it("returns false when either of the strings has extra letters", () => {
    const expected = false;
    const actual = angrams("elbows", "below");
    expect(actual).to.equal(expected);

    const actualTwo = angrams("below", "elbows");
    expect(actualTwo).to.equal(expected);
  });

  it("returns false when the strings have the same letters in different quanitites", () => {
    const expected = false;
    const actual = angrams("listens", "silent");
    expect(actual).to.equal(expected);
  });
});
