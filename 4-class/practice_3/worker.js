import Person from '../practice_1/person';

// TODO 14: 在这里写实现代码
export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return 'I am a Worker. I have a job.';
  }
}
