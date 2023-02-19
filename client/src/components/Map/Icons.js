import L from "leaflet";
import userIcon from "../../assets/user.gif";
import busIcon from "../../assets/bus.png";
import metroIcon from "../../assets/metro.png";
import trainIcon from "../../assets/train.png";
import destination from "../../assets/destination.png";

export const UserIcon = L.icon({
    iconUrl: userIcon,
    iconSize: [50, 50],
    iconAnchor: [30, 50],
    popupAnchor: [2, -40],
});
export const BusIcon = L.icon({
    iconUrl: busIcon,
    iconSize: [60, 70],
    iconAnchor: [31, 60],
    popupAnchor: [2, -40],
});
export const MetroIcon = L.icon({
    iconUrl: metroIcon,
    iconSize: [60, 60],
    iconAnchor: [28, 57],
    popupAnchor: [2, -40],
});
export const TrainIcon = L.icon({
    iconUrl: trainIcon,
    iconSize: [50, 70],
    // iconAnchor: [24, 68],
    iconAnchor: [0, -250],
    popupAnchor: [2, -40],
});
export const DestinationIcon = L.icon({
    iconUrl: destination,
    iconSize: [50, 50],
    // iconAnchor: [24, 68],
    iconAnchor: [0, 70],
    popupAnchor: [2, -60],
});
