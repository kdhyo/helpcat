/*global kakao*/
import { map } from "jquery";
import React, { Component } from "react"
import API from "../../config/apikey.json"
class Map extends Component {
  componentDidMount(){
    const lat = this.props.lat;
    const lng = this.props.lng;
    const API_KEY = API.kakaoMapAPI.API_KEY;
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
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