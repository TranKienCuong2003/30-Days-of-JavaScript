Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1];
};

// Example
console.log([null, {}, 3].last());
console.log([].last());
