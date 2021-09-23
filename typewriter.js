const animateSentence = (sentence) => {
  let timer = 0;
  let current = 0;

  for (const char of sentence) {
    timer += 75;
    current++;

    if (current === sentence.length) {
      setTimeout(() => {
        process.stdout.write(char + '\n');
      }, timer);
    } else {
      setTimeout(() => {
        process.stdout.write(char);
      }, timer);
    }
  }
};

// Test/driver code.
animateSentence('My favorite foods are:\n1) Fish & Chips\n2) Pizza\n3) Fried Chicken');