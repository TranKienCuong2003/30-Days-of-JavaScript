Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

// Example
console.log([
  {"id": "1"},
  {"id": "1"},
  {"id": "2"}
].groupBy(item => item.id));

console.log([
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
].groupBy(list => String(list[0])));

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(n => String(n > 5)));
