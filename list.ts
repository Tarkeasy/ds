class List {
  private list = {};
  // O(n) -> 1
  addItem<T>(item: T, listLength = Object.keys(this.list).length): Object {
    this.list[listLength] = item;
    return this.list;
  }
  // O(n) -> 1
  getItem(index: number): Object {
    return this.list[index];
  }
  // O(n) -> 1
  removeItem(index: number): Object {
    delete this.list[index];
    return this.list;
  }
  // O(n) -> n
  reverse() {
    const listKeys = Object.entries(this.list);
    const tempList = {};
    for (let i = listKeys.length - 1; i >= 0; i--) {
      const [index, value] = listKeys[i];
      tempList[index] = value;
    }
    this.list = tempList;
    return this.list;
  }
  // O(n) -> 1
  size() {
    return Object.keys(this.list).length;
  }
}

export default List;
