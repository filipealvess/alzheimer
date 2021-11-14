function generate(amount = 20) {
  const numbers = [];
  const halfAmount = amount / 2;

  while (numbers.length < halfAmount) {
    const newNumber = getRandomNumber(numbers);

    numbers.push(newNumber);
  }

  return shuffle([...numbers, ...numbers]);
}

function getRandomNumber(array) {
  const limit = 35;
  const randomNumber = Math.floor(Math.random() * limit);

  return array.includes(randomNumber) ? getRandomNumber(array) : randomNumber;
}

function shuffle(array) {
  const numbers = [...array];
  
  for (let index = numbers.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    
    [numbers[index], numbers[randomIndex]] = [numbers[randomIndex], numbers[index]];
  }

  return numbers;
}

module.exports = generate;