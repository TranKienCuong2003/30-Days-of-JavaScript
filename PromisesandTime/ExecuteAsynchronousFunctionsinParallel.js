function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        let hasRejected = false;

        functions.forEach((fn, index) => {
            fn()
                .then(value => {
                    if (hasRejected) return;
                    results[index] = value;
                    completed += 1;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    if (!hasRejected) {
                        hasRejected = true;
                        reject(error);
                    }
                });
        });
    });
}

// Example
const functions1 = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];
promiseAll(functions1).then(console.log);

const functions2 = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];
promiseAll(functions2).catch(console.log);

const functions3 = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];
promiseAll(functions3).then(console.log);
