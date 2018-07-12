let memoize = fn => { //1
  let cache = {}; // 2
  return (...args) => { //3
    let stringifiedArgs = JSON.stringify(args);//4
    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args); //5
    return result;//6
  };
};

/*
1. memoize function accepts a fn to be memoized.
2. initialize a new cache for the fn passed in utilizing the, ever so powerful, closure scope.
3. return the memoized fn which accepts some number of args.
4. Stringify the arguments passed to our memoized fn to be used as a “key” to our cache.
5. Check the cache for the value associated with that key.
5.1 If the value associated with that key exists in the cache we assign it to result 
    otherwise we call fn with the arguments passed to the memoized function and 
    assign its value to the cache.
6. Finally, we return the result.
*/

let pureAdd = (x,y) => { return x + y }; // pure function
let memoizedAdd = memoize(pureAdd); // memoized pure function

memoizedAdd(3, 4) // 7
memoizedAdd(3, 4) // 7
memoizedAdd(3, 5) // 8
memoizedAdd(3, 7) // 10
memoizedAdd(3, 4) // 7
memoizedAdd(3, 5) // 8
// for above 6 calls, memoize will invoke pureAdd function only 3 times, 
// for remaining all the calls it'll return result from cache since it's called with exact same arguments
// efficient and consistent!