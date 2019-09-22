const numberList = [2, 4, 6, 8];

function sumFor(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(numberList));

function sumWhile(numbers) {
  let sum = 0;
  let i = 0;

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(numberList));

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(sumRecursion(numberList));

function sumTheSimpleWay(numbers) {
  const sum = _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
  return sum;
}

console.log(sumTheSimpleWay(numberList));
