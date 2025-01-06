function filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function(n) { return n > 10; };
console.log(filter(arr1, greaterThan10));

const arr2 = [1, 2, 3];
const firstIndex = function(n, i) { return i === 0; };
console.log(filter(arr2, firstIndex));

const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function(n) { return n + 1; };
console.log(filter(arr3, plusOne));
