function reduce(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}

// Example
const nums1 = [1, 2, 3, 4];
const sum1 = function(accum, curr) { return accum + curr; };
console.log(reduce(nums1, sum1, 0));

const nums2 = [1, 2, 3, 4];
const sum2 = function(accum, curr) { return accum + curr * curr; };
console.log(reduce(nums2, sum2, 100));

const nums3 = [];
const sum3 = function(accum, curr) { return 0; };
console.log(reduce(nums3, sum3, 25));
