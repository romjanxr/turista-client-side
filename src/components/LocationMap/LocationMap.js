import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '400px'
};

const center = {
    lat: 23.746466,
    lng: 90.376015
};

const LocationMap = () => {

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <>
                        <Marker
                            position={center}
                        />
                    </>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default LocationMap;