import React, { useState } from "react";
import MapContainer from "./components/MapContainer.js";
import Pois from "./components/Pois";
import classes from "./SecondScreen.module.css";

const SecondScreen = () => {
    const [pois, setPois] = useState([]);
    const [mapClick, setMapClick] = useState(false);
    const [listClick, setListClick] = useState(false);
    const [myCoords, setMyCoords] = useState([]);

    function handleFetchPois() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showAlert);
        } else {
            alert("Geolocation is not supported by this browser!");
        }
        fetch('test_pois.json').then(response => {
            return response.json();
        }).then(data => {
            const transformedPois = data.map(poi => {
                return {
                    id: poi.id,
                    latitude: poi.latitude,
                    address: poi.address,
                    longitude: poi.longitude
                }
            });
            setListClick(true);
            
            setPois(transformedPois);
            // console.log(pois);
            // console.log(transformedPois);
        });
    };

    function showPosition(position) {
        console.log(position.coords.latitude,position.coords.longitude);
        setMyCoords([position.coords.latitude,position.coords.longitude])
    }
    function showAlert(response) {
        switch(response.code) {
            case response.PERMISSION_DENIED:
                setMyCoords([NaN,NaN])
                alert("Some services may not work correctly!");
        }
    }


    const handleMapClick = () => {
        setMapClick(true);
        setListClick(false);
        // console.log(mapClick);
    }
    
    return (
        <React.Fragment>
            
            <div className={classes.navbar}>
                <p onClick={handleFetchPois}>List</p>
                <p onClick={handleMapClick}>Map</p>
            </div>
            <div>
                {listClick && <Pois pois={pois} myCoords={myCoords}/>}
            </div>
            <div>
                {mapClick && <MapContainer pois={pois}/>}
            </div>
            
        </React.Fragment>

    );
};

export default SecondScreen;