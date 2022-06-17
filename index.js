function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
     // n steps (depending on the length of the input array)
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
       // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  return false;
}

