var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item))
            .filter(item => Boolean(item) || (Array.isArray(item) && item.length === 0));
    } else if (typeof obj === "object" && obj !== null) {
        const result = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (Boolean(value) || (Array.isArray(value) && value.length === 0)) {
                    result[key] = compactObject(value);
                }
            }
        }
        return result;
    }
    return obj;
};

// Example
console.log(compactObject([null, 0, false, 1]));

console.log(compactObject({"a": null, "b": [false, 1]}));

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
