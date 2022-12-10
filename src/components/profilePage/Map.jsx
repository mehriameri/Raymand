import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { useState } from 'react';

const Map = ({ position, name, avatar }) => {
    // const [center,setCenter]=useState
    function FlyMapTo() {
        const map = useMap();
    //    console.log( map.getCenter())
        useEffect(() => {
            map.setView(position);
            // map.addEventListener('mousemove', () => map.getCenter(position))
        }, [position])
        return null
    }
    return (
        <>
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
            <button type='button' className='border border-red-500 z-50' onClick={() => alert()}>return</button>
        </>
    )
}

export default Map;