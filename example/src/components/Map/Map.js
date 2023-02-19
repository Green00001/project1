
import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import Loading from '../Loading/Loading'
import { UserIcon, BusIcon, MetroIcon, DestinationIcon } from "./Icons";
import { mapLocation } from "../../functions/map"
import { getAll, getNearbyStations } from "../../functions/stations"
import "./map.css"
import LGeoCoder from "./LGeoCoder"

export default function Map({map}) {
    const mapFetched = useRef(false);
    const [position, setPosition] = useState([])
    const [transport, setTransport] = useState({})
    // const [destination, setDestination] = useState({})

    console.log(transport && transport.bus, "aze")
    useEffect(() => {
        if (mapFetched.current) return;

        mapLocation(setPosition).then(e => getAll(setTransport, e));


        mapFetched.current = true;

    }, []);

    return (
        <>
         
            {position.length ?
                <MapContainer ref={map} center={position} zoom={16} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={position} icon={UserIcon}>
                        <Popup >
                            <h3 style={{ textAlign: "center" }}>You are here !</h3>
                            <p style={{ textAlign: "center", fontSize: "16px" }}>
                                Look for nearby Transport in some other area by draging the Icon !</p>
                        </Popup>
                    </Marker>

                    {transport.metro && transport.metro.map((e, i) => (
                        <Marker key={i} position={e.position} icon={MetroIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}
                    {transport.bus && transport.bus.map((e, i) => (
                        <Marker key={i} position={e.position} icon={BusIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}




                    {/* {destination.metro && destination.metro.map((e, i) => (
                        <Marker key={i} position={e.position} icon={MetroIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}
                    {destination.bus && destination.bus.map((e, i) => (
                        <Marker key={i} position={e.position} icon={BusIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))} */}
                </MapContainer> : <Loading />}
        </>
    )
}
