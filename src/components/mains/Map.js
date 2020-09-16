import { map } from "jquery";
/*global kakao*/
import React, { Component } from "react"
class Map extends Component {
  componentDidMount(){
    const lat = this.props.lat;
    const lng = this.props.lng;

    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f0e1982bec41decdb43b25d83973abbd&autoload=false";
    document.head.appendChild(mapScript);
    mapScript.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 7
        };
        const map = new kakao.maps.Map(container, options);
      });
    }
  }
  render() {
      return (
        <>
      <main>
        <div id="map" className="map">Loding...</div>
      </main>
    </>
    )
  }
}

export default Map