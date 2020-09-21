export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let result = collection.find(element => {
    if (element.age > 10 && element.age < 20) {
      return element.name;
    }
  });
  return result.name;
}
