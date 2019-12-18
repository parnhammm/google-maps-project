/**
 * Wrapper class around the google.maps.Map
 */
export class Map {
  private googleMap: google.maps.Map;

  /**
   * Constructs an instance of Map
   *
   * @param element The element to render the map into
   */
  constructor(element: HTMLElement) {
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
}
