class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    
    set(key, value, duration) {
        const currentTime = Date.now();
        const expireTime = currentTime + duration;

        if (this.cache.has(key) && this.cache.get(key).expireTime > currentTime) {
            this.cache.get(key).value = value;
            this.cache.get(key).expireTime = expireTime;
            return true;
        }
        
        this.cache.set(key, { value, expireTime });
        return false;
    }
    
    get(key) {
        const currentTime = Date.now();
        
        if (this.cache.has(key) && this.cache.get(key).expireTime > currentTime) {
            return this.cache.get(key).value;
        }
        
        return -1;
    }
    
    count() {
        const currentTime = Date.now();
        let count = 0;

        for (let [key, value] of this.cache) {
            if (value.expireTime > currentTime) {
                count++;
            }
        }
        
        return count;
    }
}

// Example
const actions1 = ["TimeLimitedCache", "set", "get", "count", "get"];
const values1 = [[], [1, 42, 100], [1], [], [1]];
const timeDelays1 = [0, 0, 50, 50, 150];

const cache1 = new TimeLimitedCache();
actions1.forEach((action, index) => {
    const delay = timeDelays1[index];
    setTimeout(() => {
        const value = values1[index];
        if (action === "TimeLimitedCache") {
            console.log(null);
        } else if (action === "set") {
            console.log(cache1.set(...value));
        } else if (action === "get") {
            console.log(cache1.get(...value));
        } else if (action === "count") {
            console.log(cache1.count());
        }
    }, delay);
});

const actions2 = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"];
const values2 = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []];
const timeDelays2 = [0, 0, 40, 50, 120, 200, 250];

const cache2 = new TimeLimitedCache();
actions2.forEach((action, index) => {
    const delay = timeDelays2[index];
    setTimeout(() => {
        const value = values2[index];
        if (action === "TimeLimitedCache") {
            console.log(null);
        } else if (action === "set") {
            console.log(cache2.set(...value));
        } else if (action === "get") {
            console.log(cache2.get(...value));
        } else if (action === "count") {
            console.log(cache2.count());
        }
    }, delay);
});
