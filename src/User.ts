import faker from "faker";
import { Locatable } from "./Locatable";

/**
 * Class to represent a user
 *
 * This is created with random data
 */
export class User implements Locatable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  /**
   * Constructs a User object
   */
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  public getMarkerContent(): string {
    return `This user's name is ${this.name}.`;
  }
}
