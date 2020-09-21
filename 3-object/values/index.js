export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let s = 0;
  Object.values(source).forEach(element => {
    s += parseInt(element);
  });
  return s;
}
