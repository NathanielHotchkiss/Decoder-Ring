const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesarModule", () => {
  it("Function properly decodes message", () => {
    let actual = caesar("ibdlixp", -3, false);
    let expected = "legolas";
    expect(actual).to.equal(expected);
  });
  it("Function properly encodes message", () => {
    let actual = caesar("Aragorn", 3, true);
    let expected = "dudjruq";
    expect(actual).to.equal(expected);
  });
  it("Check that string has proper spacing", () => {
    let actual = caesar("One Ring to rule them all,", 8, true);
    let expected = "wvm zqvo bw zctm bpmu itt,";
    expect(actual).to.equal(expected);
  });
  it("Check that shift is not equal to zero, greater than 25, less than -25", () => {
    let actual = caesar("One Ring to find them,", 99, true);
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should make all letters lowercase", () => {
    let actual = caesar("WVM zqvo BW jzqvo bpmu ITT ivl qv bpm lizsvmaa jqVl bpmu!", 8, false);
    let expected = "one ring to bring them all and in the darkness bind them!";
    expect(actual).to.equal(expected);
  });
});
