class Vehicle {
  constructor(public color: string) {}

  protected honk() {
    console.log('honk');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vrom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange');
console.log(car.wheel);
