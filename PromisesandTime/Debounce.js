function debounce(fn, t) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

// Example
let start = Date.now();
function log(...inputs) {
    console.log([Date.now() - start, inputs]);
}

const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

const calls1 = [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
];

const dlog2 = debounce(log, 20);
calls1.forEach(call => {
    setTimeout(() => dlog2(...call.inputs), call.t);
});

const calls2 = [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
];

const dlog3 = debounce(log, 150);
calls2.forEach(call => {
    setTimeout(() => dlog3(...call.inputs), call.t);
});
