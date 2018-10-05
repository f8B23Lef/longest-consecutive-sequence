module.exports = function longestConsecutiveLength(array) {
   
  if(array.length === 0) return 0;

  const set = new Set();

  for(let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }
  
  let maxCount = 1;
  for (let item of set) {
    if(!set.has(item - 1)) {
      let count = 1;
      while(set.has(item + 1)) {
        count++;
        item++;
        if(count > maxCount) {
          maxCount = count;
        }
      }
    }
  }
  return maxCount;
}
