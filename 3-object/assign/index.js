export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  let temp = { serialNumber: '12345' };
  source.properties.status = 'processed';
  let result = Object.assign(temp, source);
  return result;
}
