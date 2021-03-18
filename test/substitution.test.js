const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
    let actual = substitution("galadriel", "short");
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    let actual = substitution("gimli", "abcabcabcabcacabcyz");
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    let actual = substitution("isildur", "abcabcabcabcabcabcabcabcyz");
    let expected = false;
    expect(actual).to.equal(expected);
  });
});

describe("encode", () => {
  it("should encode a message by using the given substitution alphabet", () => {
    let actual = substitution("frodo", "xoyqmcgrukswaflnthdjpzibev");
    let expected = "chlql";
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    let actual = substitution("arwen", "$wae&zrdxtfcygvuhbijnokmpl");
    let expected = "$bk&g";
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    let input = "courage is found in unlikely places";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let encode = true;
    let actual = substitution(input, alphabet, encode);
    let expected = "ylphxgm ud clpfq uf pfwusmwe nwxymd";
    expect(actual).to.equal(expected);
  });
});

describe("decode", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    let actual = substitution("chlql", "xoyqmcgrukswaflnthdjpzibev", false);
    let expected = "frodo";
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    let actual = substitution("&cbvge", "$wae&zrdxtfcygvuhbijnokmpl", false);
    let expected = "elrond";
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    let input = "ylphxgm ud clpfq uf pfwusmwe nwxymd";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let encode = false;
    let actual = substitution(input, alphabet, encode);
    let expected = "courage is found in unlikely places";
    expect(actual).to.equal(expected);
  });
});
