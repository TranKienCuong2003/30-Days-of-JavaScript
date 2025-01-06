var flat = function(arr, n) {
    const result = [];

    const flatten = (arr, currentDepth) => {
        arr.forEach(item => {
            if (Array.isArray(item) && currentDepth < n) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        });
    };

    flatten(arr, 0);
    return result;
};

// ExampleExample
function testFlatExample1() {
    let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    let n = 0;
    console.log(flat(arr, n));
}

function testFlatExample2() {
    let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    let n = 1;
    console.log(flat(arr, n));
}

function testFlatExample3() {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    let n = 2;
    console.log(flat(arr, n));
}

testFlatExample1();
testFlatExample2();
testFlatExample3();
