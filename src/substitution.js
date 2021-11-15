const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter))
        return false;
    }
    const ogABC = "abcdefghijklmnopqrstuvwxyz ";
    let subABC = alphabet + " ";
    let lowerCase = input.toLowerCase();
    let message = "";

    for (let i = 0; i < lowerCase.length; i++) {
      if (encode) {
        message += subABC[ogABC.indexOf(lowerCase[i])];
      } else {
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
