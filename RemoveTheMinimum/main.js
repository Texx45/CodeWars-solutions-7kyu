function removeSmallest(numbers) {
  const copiedNumbersArray = [...numbers];
  const min = Math.min(...copiedNumbersArray);
  const firstIndexOfMin = copiedNumbersArray.indexOf(min);
  copiedNumbersArray.splice(firstIndexOfMin, 1);
  return copiedNumbersArray;
}

console.log(removeSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 4];