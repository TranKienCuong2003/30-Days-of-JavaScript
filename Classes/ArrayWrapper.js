class ArrayWrapper {
    constructor(arr) {
      this.arr = arr;
    }
  
    valueOf() {
      return this.arr.reduce((acc, num) => acc + num, 0);
    }
  
    toString() {
      return `[${this.arr.join(',')}]`;
    }
  }
  
  // Example
  const obj1 = new ArrayWrapper([1, 2]);
  const obj2 = new ArrayWrapper([3, 4]);
  console.log(obj1 + obj2);
  
  const obj3 = new ArrayWrapper([23, 98, 42, 70]);
  console.log(String(obj3));
  
  const obj4 = new ArrayWrapper([]);
  const obj5 = new ArrayWrapper([]);
  console.log(obj4 + obj5);
  