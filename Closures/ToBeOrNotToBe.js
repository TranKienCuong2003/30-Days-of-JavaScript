function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            }
            throw new Error("Equal");
        }
    };
}

// Example
try {
    console.log(expect(5).toBe(5));
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).toBe(null));
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).notToBe(null));
} catch (e) {
    console.error(e.message);
}
