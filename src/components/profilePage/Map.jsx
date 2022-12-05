import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Map = () => {
    return (
        <div  className='border border-red-400'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}  style={{ height: "400px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map