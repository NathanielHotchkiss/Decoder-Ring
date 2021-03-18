const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("Function properly decodes message", () => {
    let actual = polybius("52515153 4244 345131245144", false);
    let expected = "keep (i/j)t secret";
    expect(actual).to.equal(expected);
  });
  it("Function properly encodes message", () => {
    let actual = polybius("keep it safe", true);
    let expected = "52515153 4244 34111251";
    expect(actual).to.equal(expected);
  });
  it("Should make all letters lowercase", () => {
    let actual = polybius("The Wise Speak Only Of What They Know");
    let expected = "443251 25423451 3453511152 43331345 4312 25321144 44325145 52334325";
    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is", () => {
    let actual = polybius("Gandalf the White");
    let expected = "22113341111312 443251 2532424451";
    expect(actual).to.equal(expected);
  });
});
