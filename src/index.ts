import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const map = new Map(document.getElementById("map"));
map.addMarker(new User());
map.addMarker(new Company());
