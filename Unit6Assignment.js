class DressingRooms {
  constructor(numRooms = 3) {
    this.numRooms = numRooms;
    this.semaphore = require('semaphore')(numRooms);
  }

  RequestRoom() {
    return new Promise((resolve, reject) => {
      this.semaphore.take(() => {
        resolve();
      });
    });
  }

  ReleaseRoom() {
    this.semaphore.leave();
  }
}

class Customer extends Thread {
  constructor(id, numberOfItems) {
    this.id = id;
    this.numberOfItems = numberOfItems;
  }

  run() {
    // try on clothes
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Scenario {
  constructor(numRooms, numCustomers, numItems) {
    this.numRooms = numRooms;
    this.numCustomers = numCustomers;
    this.numItems = numItems;
    this.customers = [];
    this.rooms = new DressingRooms(numRooms);
    this.startTime = null;
    this.endTime = null;
  }

  async run() {
    this.startTime = Date.now();

    // Create customers
    for (let i = 0; i < this.numCustomers; i++) {
      const numClothingItems =
        this.numItems === 0 ? getRandomInt(1, 6) : this.numItems;
      const customer = new Customer(numClothingItems, this.rooms);
      this.customers.push(customer);
      customer.start();
    }

    // Wait for all customers to finish
    for (const customer of this.customers) {
      await customer.run();
    }

    this.endTime = Date.now();
  }

  getElapsedTime() {
    return this.endTime - this.startTime;
  }

  getNumCustomers() {
    return this.numCustomers;
  }

  getAvgNumItems() {
    let totalItems = 0;
    for (const customer of this.customers) {
      totalItems += customer.getNumClothingItems();
    }
    return totalItems / this.numCustomers;
  }

  getAvgUsageTime() {
    let totalUsageTime = 0;
    for (const customer of this.customers) {
      totalUsageTime += customer.getUsageTime();
    }
    return totalUsageTime / this.numCustomers;
  }

  getWaitTime() {
    let totalWaitTime = 0;
    for (const customer of this.customers) {
      totalWaitTime += customer.getWaitTime();
    }
    return totalWaitTime;
  }
}

const scenario1 = new Scenario(3, 10);
scenario1.run();
console.log(`Number of Customers: ${scenario1.calculateNumCustomers()}`);
console.log(`Average Number of Items: ${scenario1.calculateAvgItems()}`);
console.log(
  `Average Usage Time of Room: ${scenario1.calculateAvgUsageTime()} seconds`
);
console.log(
  `Time Spent Waiting for a Room: ${scenario1.calculateWaitingTime()} seconds`
);

const scenario2 = new Scenario(5, 20);
scenario2.run();
console.log(`Number of Customers: ${scenario2.calculateNumCustomers()}`);
console.log(`Average Number of Items: ${scenario2.calculateAvgItems()}`);
console.log(
  `Average Usage Time of Room: ${scenario2.calculateAvgUsageTime()} seconds`
);
console.log(
  `Time Spent Waiting for a Room: ${scenario2.calculateWaitingTime()} seconds`
);

const scenario3 = new Scenario(2, 15);
scenario3.run();
console.log(`Number of Customers: ${scenario3.calculateNumCustomers()}`);
console.log(`Average Number of Items: ${scenario3.calculateAvgItems()}`);
console.log(
  `Average Usage Time of Room: ${scenario3.calculateAvgUsageTime()} seconds`
);
console.log(
  `Time Spent Waiting for a Room: ${scenario3.calculateWaitingTime()} seconds`
);
