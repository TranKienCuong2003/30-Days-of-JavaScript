function isEmpty(input) {
    if (typeof input === 'object' && !Array.isArray(input)) {
        return Object.keys(input).length === 0;
    }

    if (Array.isArray(input)) {
        return input.length === 0;
    }
    return false;
}

// Example:
console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty([]));
