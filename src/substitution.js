const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // check that the alphabet is provided, with proper length of 26
    if (!alphabet || alphabet.length !== 26) return false;
    // ensure that given alphabet is unique
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter)) return false;
    }
    const ogABC = "abcdefghijklmnopqrstuvwxyz ";
    let subABC = alphabet + " ";
    let lowerCase = input.toLowerCase();
    let message = "";

    for (let i = 0; i < lowerCase.length; i++) {
      if (encode) {
        // inside brackets produces the index, for each one subABC matches the index to a letter
        message += subABC[ogABC.indexOf(lowerCase[i])];
      } else {
        // inside brackets produces the index, for each one ogABC matches the index to a letter
        message += ogABC[subABC.indexOf(lowerCase[i])];
      }
    }
    return message;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
