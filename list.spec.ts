import List from './list';

describe('test the list', () => {
  test('add number item to the list', () => {
    const list = new List();
    expect(list.addItem(1, 0)).toEqual({ 0: 1 });
  });
  test('add string item to the list', () => {
    const list = new List();
    expect(list.addItem('Hello')).toEqual({ 0: 'Hello' });
  });
  test('get item to the list', () => {
    const list = new List();
    list.addItem(1, 0);
    expect(list.getItem(0)).toEqual(1);
  });
  test('remove item from the list', () => {
    const list = new List();
    list.addItem(1, 0);
    expect(list.removeItem(0)).toEqual({});
  });
  test('get Reverse List', () => {
    const list = new List();
    list.addItem(1);
    list.addItem(2);
    list.addItem(3);
    expect(list.reverse()).toEqual({ 2: 3, 1: 2, 0: 1 });
  });
  test('get size', () => {
    const list = new List();
    list.addItem(1);
    list.addItem(2);
    list.addItem(3);
    expect(list.size()).toEqual(3);
  });
});
