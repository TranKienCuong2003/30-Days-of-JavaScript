class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
  
      this.events[event].push(callback);
  
      return {
        unsubscribe: () => {
          this.events[event] = this.events[event].filter(cb => cb !== callback);
          return undefined;
        }
      };
    }
  
    emit(event, args = []) {
      if (!this.events[event]) {
        return [];
      }
  
      const results = [];
      for (let cb of this.events[event]) {
        results.push(cb(...args));
      }
  
      return results;
    }
  }
  
  // Example
  const emitter1 = new EventEmitter();
  console.log(emitter1.emit("firstEvent")); // []
  const sub1 = emitter1.subscribe("firstEvent", function cb1() { return 5; });
  const sub2 = emitter1.subscribe("firstEvent", function cb2() { return 6; });
  console.log(emitter1.emit("firstEvent")); // [5, 6]
  
  const emitter2 = new EventEmitter();
  const sub3 = emitter2.subscribe("firstEvent", (...args) => args.join(','));
  console.log(emitter2.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
  console.log(emitter2.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]
  
  const emitter3 = new EventEmitter();
  const sub4 = emitter3.subscribe("firstEvent", (...args) => args.join(','));
  console.log(emitter3.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
  sub4.unsubscribe();
  console.log(emitter3.emit("firstEvent", [4, 5, 6])); // []
  
  const emitter4 = new EventEmitter();
  const sub5 = emitter4.subscribe("firstEvent", x => x + 1);
  const sub6 = emitter4.subscribe("firstEvent", x => x + 2);
  sub5.unsubscribe();
  console.log(emitter4.emit("firstEvent", [5])); // [7]
  