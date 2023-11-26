import { v4 as uuidv4 } from "uuid";

/**
 * Class representing a position.
 * @class
 */
export class Position {
  /**
   * Creates an instance of the Position class.
   * @constructor
   * @param {string} positionName - Name of the position.
   * @param {number} salary - Salary associated with the position.
   * @param {number} [countTasks=15] - Count of tasks for the position (default is 15).
   */
  constructor(positionName, salary, countTasks = 15) {
    /**
     * Unique identifier for the position.
     * @member {string}
     */
    this.id = uuidv4();

    /**
     * @member {string} - Name of the position.
     * @member {number} - Salary associated with the position.
     * @member {number} - Count of tasks for the position.
     * @member {Array} - Array of permits associated with the position.
     */
    this.positionName = positionName;
    this.salary = salary;
    this.countTasks = countTasks;
    this.permits = [];
  }
}
