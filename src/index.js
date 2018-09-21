module.exports = function longestConsecutiveLength(array) {
   
  if(array.length === 0) return 0;

  var set = new Set();
  for(var i = 0; i < array.length; i++) {
    set.add(array[i]);
  }
  
  var maxCount = 1;
  for (var item of set) {
	  if(!set.has(item - 1)) {
      var count = 1;
      while(set.has(item + 1)) {
        count++;
        item++;
        if(count > maxCount){
          maxCount = count;
        }
      }
    }
  }
  return maxCount;
}
