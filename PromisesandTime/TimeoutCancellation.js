function cancellable(fn, args, t) {
    let timeoutId;
    let cancelCalled = false;

    const cancelFn = () => {
        cancelCalled = true;
        clearTimeout(timeoutId);
    };

    timeoutId = setTimeout(() => {
        if (!cancelCalled) {
            const startTime = Date.now();
            const result = fn(...args);
            console.log({ "time": Date.now() - startTime, "returned": result });
        }
    }, t);

    return cancelFn;
}

// Example
const cancelTimeMs1 = 50;
const cancelFn1 = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn1, cancelTimeMs1);

const cancelTimeMs2 = 50;
const cancelFn2 = cancellable((x) => x ** 2, [2], 100);
setTimeout(cancelFn2, cancelTimeMs2);

const cancelTimeMs3 = 100;
const cancelFn3 = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
setTimeout(cancelFn3, cancelTimeMs3);
