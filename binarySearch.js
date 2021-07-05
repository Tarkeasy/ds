const list = [1, 2, 3, 4, 5, 6, 7,8,9,10];

const search = (item) => {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.round((low + high) / 2);
    if (list[mid] === item) {
      return mid;
    } else if (list[mid] > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

console.log(search(4));
