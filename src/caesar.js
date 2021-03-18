const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // ensure that shift value is present, not equal to zero, greater than 25, or less than -25
    if (!shift || shift < -25 || shift === 0 || shift > 25) return false;
    // if decoding, subtract the shift instead of adding it
    if (!encode) shift *= -1;
    let message = "";
    // capital letters can be ignored
    const lowerCase = input.toLowerCase();
    // loop through input
    for (let i = 0; i < lowerCase.length; i++) {
      // if shift is less than zero, add 26 to shift
      if (shift < 0) return caesar(lowerCase, shift + 26);
      let letter = lowerCase[i];
      // letterCode returns the index of letter
      let letterCode = lowerCase.charCodeAt(i);
      // check if the index falls between unicode digits 97-122
      if (letterCode >= 97 && letterCode <= 122) {
        // String.fromCharCode returns a letter
        // -97 sets 'a' to index 0, then we add the 'shift'
        // then, add 97 back to get the correct index for the letter
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
