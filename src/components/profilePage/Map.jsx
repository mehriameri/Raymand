import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const Map = ({ position, name, avatar }) => {
    function FlyMapTo() {
        const map = useMap();
        useEffect(() => {
            map.setView(position)
        }, [position])
        return null
    }
    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: "420px" }}>
            <FlyMapTo />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41] })}>
                <Popup>
                   <p className='text-blue-400'> {name}</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;