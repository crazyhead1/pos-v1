export const generateNextInvoiceNumber = (initialNumber = "AAA0000000") => {
  if (!/^[A-Z]{3}\d{7}$/.test(initialNumber)) {
    throw new Error('Invalid input format. It should be like "AAA0000000".');
  }

  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let currentLetters = initialNumber.slice(0, 3);
  let currentNumber = parseInt(initialNumber.slice(3), 10);

  return function () {
    const number = currentNumber.toString().padStart(7, "0");
    const sequentialNumber = `${currentLetters}${number}`;

    currentNumber++;

    if (currentNumber > 9999999) {
      currentNumber = 0;

      // Increment the alphabet characters
      let carry = 1;
      for (let i = 2; i >= 0; i--) {
        let index = LETTERS.indexOf(currentLetters[i]);
        index += carry;
        if (index >= LETTERS.length) {
          index = 0;
          carry = 1;
        } else {
          carry = 0;
        }
        currentLetters =
          currentLetters.substring(0, i) +
          LETTERS[index] +
          currentLetters.substring(i + 1);
      }
    }

    return sequentialNumber;
  };
};
