export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  let result = collection.map(element => {
    return String.fromCharCode(96 + element);
  });
  return result;
}
