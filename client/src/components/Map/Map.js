
import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import Loading from '../Loading/Loading'
import { UserIcon, BusIcon, MetroIcon, PossibleIcon } from "./Icons";
import { mapLocation } from "../../functions/map"
import { getAll, getLineStations } from "../../functions/stations"
import "./map.css"

export default function Map({ mapRef, transport, setTransport, possibleTp, setPossibleTp }) {
    const mapFetched = useRef(false);
    const [position, setPosition] = useState([])
    console.log(transport)
    useEffect(() => {
        if (mapFetched.current) return;

        mapLocation(setPosition).then(e => getAll(setTransport, e));


        mapFetched.current = true;

    }, []);

    return (
        <>

            {position.length ?
                <MapContainer ref={mapRef} center={position} zoom={16} scrollWheelZoom={true} >
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
                        <Marker
                            key={i} position={e.position} icon={BusIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}


                    {possibleTp ? possibleTp.bus && possibleTp.bus.map((e, i) => (
                        <Marker
                            eventHandlers={{
                                click: () => {
                                    getLineStations(e, setTransport, setPossibleTp, "bus")

                                },
                            }}

                            key={i} position={e.position} icon={PossibleIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    )) : null}





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
