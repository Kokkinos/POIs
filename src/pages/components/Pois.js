import { useState } from "react";
import Poi from "./Poi";
import classes from './Pois.module.css';

const Pois = (props) => {
    const distances = [];
    // const [locationDenied, setLocationDenied] = useState(false);
    let locationDenied = false;
    let locationAccepted = false;

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2,addressOfPoi) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        // return d;
        distances.push({distance: d, lat: lat2, long: lon2, address: addressOfPoi});
        // setDistances((prevState) => {return {...prevState, distance: d, lat: lat2, long: lon2};
        // });
        //console.log(distances);
        //return distances;
        if(isNaN(lat1) && isNaN(lon1)) {
          locationDenied = true;
        }
        else {
          locationAccepted = true;
        }
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }

    return (
        <ul className={classes['pois-list']}>
          {props.pois.map((poi) => {getDistanceFromLatLonInKm(props.myCoords[0], props.myCoords[1], poi.latitude, poi.longitude, poi.address)})}
          

          {locationAccepted && distances.sort((a, b) => a.distance > b.distance).map((poi) => (
            <Poi distance={poi.distance} address={poi.address}/>
          ))}

          {locationDenied && distances.sort((a, b) => a.address > b.address).map((poi) => (
            <Poi distance={0} address={poi.address}/>
          ))}


           
        </ul>
    );
}

export default Pois;