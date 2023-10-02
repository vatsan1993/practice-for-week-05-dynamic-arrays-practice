class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    // Your code here
    if (index < this.length) {
      return this.data[index];
    }
  }

  unshift(val) {
    // Your code here
    if (this.length == this.capacity) {
      let newArr = new Array(this.capacity + 5);
      for (let i = this.length; i > 1; i--) {
        newArr[i] = this.data[i - 1];
      }
      this.data = newArr;
      this.capacity += 5;
    } else {
      for (let i = this.length; i >= 1; i--) {
        this.data[i] = this.data[i - 1];
      }
    }

    this.data[0] = val;
    this.length++;
  }
}

module.exports = DynamicArray;
