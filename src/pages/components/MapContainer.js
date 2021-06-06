import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';



 export class MapContainer extends Component {
  
  displayMarkers = () => {
    return this.props.pois.map((poi, index) => {
      return <Marker key={index} id={index} position={{
        lat: poi.latitude,
        lng: poi.longitude
      }}/>
    });
  };

  render() {
     return (
       <React.Fragment>
         <Map
          google={this.props.google}
          zoom={7}
          // style={mapStyles}
          initialCenter={{ lat: 37.160931, lng: 22.867281}}
        >
          {this.displayMarkers()}
        </Map>
       
       </React.Fragment>
       
     );
   }
 }

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDtDRqMiKuJDNnEbYC8QiSKPnuxHWnVgLQ")
  })(MapContainer);




