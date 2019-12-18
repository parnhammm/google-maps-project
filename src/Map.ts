import { Locatable } from "./Locatable";

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

  /**
   * Adds a map marker
   *
   * @param locatable The object to locate
   */
  public addMarker(locatable: Locatable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: locatable.location.lat,
        lng: locatable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: locatable.getMarkerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
