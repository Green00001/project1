import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { useState, useEffect } from 'react';
import { getNearbyBusStations } from "../functions/stations"
const MapContainer = ({ google, transport }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [map, setMap] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    getNearbyBusStations(userLocation)

                    setUserLocation(userLocation);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }, []);

    const handleMarkerClick = (props, marker) => {
        let forward = props.position.line_number.includes("Aller")
        let backward = props.position.line_number.includes("Retour")

        let obj = {
            ...props.position,
            direction: backward ? "Backward" :
                forward ? "Forward" : "Forward & Backward",
            line_number: forward ? props.position.line_number.replace("Aller", "") :
                backward ? props.position.line_number.replace("Retour", "") : props.position.line_number
        }
        console.log(obj, props.position)
        setActiveMarker({ marker: marker, position: obj });
        setShowInfoWindow(true);


    };

    const handleInfoWindowClose = () => {
        setActiveMarker(null);
        setShowInfoWindow(false);
    };

    const handleRecenter = () => {
        if (google && map && userLocation) {
            const center = new google.maps.LatLng(userLocation);
            map.panTo(center);
        }
    };

    if (!userLocation) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <button onClick={handleRecenter}>Recenter Map</button> */}
            <Map
                google={google}
                zoom={15}
                initialCenter={userLocation}
                disableDefaultUI={true}
                onLoad={(map) => setMap(map)}
            >
                <Marker position={userLocation} />

                {transport.metro.map((e, i) => (
                    <Marker
                        key={i}
                        position={e}
                        icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
                        onClick={handleMarkerClick}
                    />
                ))}
                {transport.bus.map((e, i) => (
                    <Marker
                        key={i}
                        position={e}
                        icon={'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'}
                        onClick={handleMarkerClick}
                    />
                ))}
                {transport.train.map((e, i) => (
                    <Marker
                        key={i}
                        position={e}
                        icon={'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
                        onClick={handleMarkerClick}
                    />
                ))}

                <InfoWindow
                    marker={activeMarker && activeMarker.marker}
                    visible={showInfoWindow}
                    onClose={handleInfoWindowClose}

                >
                    <div>
                        <h3>{activeMarker && activeMarker.position.station_name}</h3>
                        <p>Bus Number : {activeMarker && activeMarker.position.line_number}</p>

                        <p>Direction : {activeMarker && activeMarker.position.direction}</p>
                    </div>
                </InfoWindow>
            </Map>
        </div >
    );
};




export default GoogleApiWrapper({
    apiKey: ("AIzaSyBgJLw7qB1QT2-dc6ka5a3Tl4o2mIumOOc")
})(MapContainer);
