var join = function(arr1, arr2) {
    const resultMap = {};

    const mergeObjects = (obj1, obj2) => {
        const merged = { ...obj1, ...obj2 };
        return merged;
    };

    arr1.forEach(item => {
        resultMap[item.id] = item;
    });

    arr2.forEach(item => {
        if (resultMap[item.id]) {
            resultMap[item.id] = mergeObjects(resultMap[item.id], item);
        } else {
            resultMap[item.id] = item;
        }
    });

    return Object.values(resultMap).sort((a, b) => a.id - b.id);
};

// Example
console.log(join(
    [{"id": 1, "x": 1}, {"id": 2, "x": 9}], 
    [{"id": 3, "x": 5}]
));

console.log(join(
    [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 3, "y": 6}], 
    [{"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}]
));

console.log(join(
    [{"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 48}], 
    [{"id": 1, "b": {"c": 84}, "v": [1, 3]}]
));
