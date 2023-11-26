import { v4 as uuidv4 } from "uuid";

export class Position {
  constructor(positionName, salary, countTasks = 15) {
    this.id = uuidv4();
    this.positionName = positionName;
    this.salary = salary;
    this.countTasks = countTasks;
    this.permits = [];
  }
}
