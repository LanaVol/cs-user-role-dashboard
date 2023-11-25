import { v4 as uuidv4 } from "uuid";

export class Position {
  constructor(positionName, salary, countTasks) {
    this.id = uuidv4();
    this.positionName = positionName;
    this.salary = this.salary;
    this.countTasks = countTasks;
    this.trade = {
      sellProducts: false,
      setPrices: false,
      watchAnalytics: false,
    };
    this.production = {
      buyMaterials: false,
      setWorkers: false,
    };
    this.management = {
      setPositions: false,
      excludePosition: false,
    };
    this.showdown = {
      duel: false,
      makeClaims: false,
    };
    // this.permits = [{ countBuild: true }, { tradeDuties: true }];
  }

  setTrade(permit) {
    this.trade[permit] = !this.trade[permit];
  }

  setProduction(permit) {
    this.production[permit] = !this.production[permit];
  }
}
