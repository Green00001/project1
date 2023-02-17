import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

export class MapContainer extends Component {
    state = {
        userLocation: null,
        map: null 
    };

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    this.setState({ userLocation });
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }

    handleRecenter = () => {
        const { google } = this.props;
        const { userLocation } = this.state;
        console.log(this.map)
        if (google && this.state.map && userLocation) {
            const center = new google.maps.LatLng(userLocation);
            this.state.map.panTo(center);
        }
    };

    render() {
        const { userLocation } = this.state;
        if (!userLocation) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {/* <button onClick={this.handleRecenter}>Recenter Map</button> */}
                <Map
                    google={this.props.google}
                    zoom={16}
                    initialCenter={userLocation}
                    disableDefaultUI={true}
                    onLoad={map => this.setState({ map: map })}
                >
                    <Marker position={userLocation} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBgJLw7qB1QT2-dc6ka5a3Tl4o2mIumOOc")
})(MapContainer);
