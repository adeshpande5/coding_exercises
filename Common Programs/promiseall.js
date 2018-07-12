var promise1 = Promise.resolve(3);
var promise2 = Promise.resolve(42);
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 3000, 'foo');
});


function promiseAll(arr) {  
  let values = [];
  let resolvedCount = 0;
  return new Promise((resolve, reject) => {
    
    for(let [idx, val] of arr.entries()){ 
      val.then(value => {
        values[idx] = value;
        resolvedCount++;
        if(resolvedCount === arr.length){
          resolve(values);
        }
      });
      
    }
  });
}

promiseAll([promise1, promise2, promise3])
  .then(values => console.log(values));
// [3, 42, 'foo']

promiseAll([promise3, promise1, promise2])
  .then(values => console.log(values));
// ['foo', 3, 42]