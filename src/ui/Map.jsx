// import React from 'react'
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import './../pages/SingleProperty.css';

const Map = () => {

    const mapPosition = [19.0760 , 72.8777];

  return (
    <MapContainer
    center={[19.0760 , 72.8777]}
    zoom={10}
    scrollWheelZoom={true} className='location'
    >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        {/* <GeoCoderMarker address={`${address} ${city} ${country}`} /> */}
        <Marker position={mapPosition}></Marker>   
    </MapContainer>
  )
}

export default Map