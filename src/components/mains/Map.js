/*global kakao*/

import React, { Component } from "react"
import API from "../../config/apikey.json"
import { Link } from "react-router-dom"
class Map extends Component {
  componentDidMount(){
    const lat = 37.403517;
    const lng = 126.930044;
    const API_KEY = API.kakaoMapAPI.API_KEY;
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);
    mapScript.onload = () => {
      kakao.maps.load(() => {

        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 7
        };
        const map = new kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('경기도 안양시 동안구 비산동 임곡로 29', function(result, status) {

          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {

              //마커 찍을 위치
              var position = new kakao.maps.LatLng(result[0].y, result[0].x);

              //아이콘 바꾸기
              var icon = new kakao.maps.MarkerImage(
                'HC.png',
                new kakao.maps.Size(31, 35),
                {
                    offset: new kakao.maps.Point(16, 34),
                    alt: "우리집이다냥",
                    shape: "poly",
                    coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
                }
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new kakao.maps.Marker({
                position: position,
                image: icon
              });
              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);
              const golink = "/login";
              var content = `
                <div class="customoverlay">
                  <a href="${golink}" >
                    <span class="title">${golink}</span>
                  </a>
                </div>
              `;

              // 커스텀 오버레이가 표시될 위치입니다
              var position = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 커스텀 오버레이를 생성합니다
              var customOverlay = new kakao.maps.CustomOverlay({
                  map: map,
                  position: position,
                  content: content,
                  yAnchor: 1
              });

              // 마커에 click 이벤트를 등록합니다
              kakao.maps.event.addListener(marker, 'click', function() {
                window.location.replace("/login");
              });

              kakao.maps.event.addListener(marker, 'mouseover', function() {
                var infowindow = new kakao.maps.InfoWindow({
                  content : `<a href="/login"><div style="text-align:center;">hi</div></Link>`
                });
                infowindow.open(map, marker);
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(position);
          }
        });
      });
    }

  }
  render() {
    return (
      <>
        <main id="map">
          <div  className="map">
            Loding...</div>
        </main>
      </>
    )
  }
}

export default Map