function cancellable(fn, args, t) {
    let intervalId;
    let startTime = Date.now();

    const results = [];
    const logResult = () => {
        const currentTime = Date.now() - startTime;
        const result = fn(...args);
        results.push({ "time": currentTime, "returned": result });
    };

    logResult();

    intervalId = setInterval(logResult, t);

    const cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn;
}

// Example
const cancelTimeMs1 = 190;
const cancelFn1 = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn1, cancelTimeMs1);

const cancelTimeMs2 = 165;
const cancelFn2 = cancellable((x1, x2) => x1 * x2, [2, 5], 30);
setTimeout(cancelFn2, cancelTimeMs2);

const cancelTimeMs3 = 180;
const cancelFn3 = cancellable((x1, x2, x3) => x1 + x2 + x3, [5, 1, 3], 50);
setTimeout(cancelFn3, cancelTimeMs3);
