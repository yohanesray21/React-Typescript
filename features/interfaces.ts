interface Report {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `Name : ${this.name}`;
  },
};

const printVehicle = (item: Report): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
