function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

// Example
const arr1 = [1, 2, 3];
const plusOne = function(n) { return n + 1; };
console.log(map(arr1, plusOne));

const arr2 = [1, 2, 3];
const plusI = function(n, i) { return n + i; };
console.log(map(arr2, plusI));

const arr3 = [10, 20, 30];
const constant = function() { return 42; };
console.log(map(arr3, constant));
