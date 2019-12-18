import faker from "faker";
import { Locatable } from "./Locatable";

/**
 * Class to represent a Company
 */
export class Company implements Locatable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  /**
   * Constructs a Company object
   */
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  public getMarkerContent(): string {
    return `This company's name is ${this.name}. Their catch phrase is ${this.catchPhrase}.`;
  }
}
