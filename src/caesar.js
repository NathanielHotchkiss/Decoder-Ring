const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift === 0 || shift > 25) return false;
    if (!encode) shift *= -1;
    let message = "";
    const lowerCase = input.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      if (shift < 0) return caesar(lowerCase, shift + 26);
      let letter = lowerCase[i];
      let letterCode = lowerCase.charCodeAt(i);
      if (letterCode >= 97 && letterCode <= 122) {
        letter = String.fromCharCode(((letterCode - 97 + shift) % 26) + 97);
      }
      message += letter;
    }
    return message;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
