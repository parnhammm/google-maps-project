/**
 * Interface Locatable that defines an object which can be placed
 * on this map
 */
export interface Locatable {
  location: {
    lat: number;
    lng: number;
  };
}
