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

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        navigator.geolocation.getCurrentPosition(function(result) {
          if (navigator.geolocation) {
            console.log(result)
            var lat = result.coords.latitude, // 위도
                lon = result.coords.longitude; // 경도

            //현재 위치로 메인을 잡아줌
            let container = document.getElementById("map");
            let options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 7
            };
            const map = new kakao.maps.Map(container, options);

            //마커 아이콘 바꾸기
            var icon = new kakao.maps.MarkerImage(
              'HC.png', new kakao.maps.Size(31, 35),{
                  offset: new kakao.maps.Point(16, 34),
                  alt: "우리집이다냥",
                  shape: "poly",
                  coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
              }
            );

            // DB에서 온 심부름장소들 데이터
            var errandPlace = [
              {id:1, name:"이마트", place:'경기도 안양시 동안구 비산동 411-8'},
              {id:2, name:"종합운동장", place:'경기도 안양시 동안구 비산3동 평촌대로 389'},
              {id:3, name:"한양스포츠센터", place:'경기도 안양시 동안구 달안동 1101-2'},
              {id:4, name:"버거킹", place:'경기도 안양시 동안구 관양동 관악대로 312'},
            ];


            //마커들 뿌리는 반복문 시작
            for (let i = 0; i < errandPlace.length; i++) {
              // 심부름장소들 데이터 위도 적도로 변환
                geocoder.addressSearch(errandPlace[i].place, function(result, status) {

                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                  // 마커, 커스텀 오버레이가 표시될 위치
                  var position = new kakao.maps.LatLng(result[0].y, result[0].x);

                  // 마커에 변환된 위도/경도 넘겨서 저장함
                  var marker = new kakao.maps.Marker({
                    position: position,
                    image: icon
                  });
                  marker.setMap(map); // 마커가 지도 위에 표시되도록 설정


                  //커스텀 오버레이에 표시될 텍스트
                  var content = `
                    <div class="customoverlay">
                      <a href="board${errandPlace[i].id}" >
                        <span class="title">${errandPlace[i].name}</span>
                      </a>
                    </div>
                  `;

                  // 커스텀 오버레이를 생성합니다
                  var customOverlay = new kakao.maps.CustomOverlay({
                      position: position,
                      content: content,
                      yAnchor: 1
                  });
                  customOverlay.setMap(map); // 커스텀 오버레이가 지도 위에 표시되도록 설정합니다.
                }
              });
            }
          }else{ //GPS로 현재위치를 못잡을 경우
            //기본값으로 대림대학교 위치를 메인으로 잡음
            let container = document.getElementById("map");
            let options = {
              center: new kakao.maps.LatLng(37.403278, 126.930351),//적도 위도값은 대림대학교
              level: 7
            };
            const map = new kakao.maps.Map(container, options);

            //마커 아이콘 바꾸기
            var icon = new kakao.maps.MarkerImage(
              'HC.png', new kakao.maps.Size(31, 35),{
                  offset: new kakao.maps.Point(16, 34),
                  alt: "우리집이다냥",
                  shape: "poly",
                  coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
              }
            );

            // DB에서 온 심부름장소들 데이터
            var errandPlace = [
              {id:1, name:"이마트", place:'경기도 안양시 동안구 비산동 411-8'},
              {id:2, name:"종합운동장", place:'경기도 안양시 동안구 비산3동 평촌대로 389'},
              {id:3, name:"한양스포츠센터", place:'경기도 안양시 동안구 달안동 1101-2'},
              {id:4, name:"버거킹", place:'경기도 안양시 동안구 관양동 관악대로 312'},
            ];

            //마커들 뿌리는 반복문 시작
            for (let i = 0; i < errandPlace.length; i++) {
              // 심부름장소들 데이터 위도 적도로 변환
                geocoder.addressSearch(errandPlace[i].place, function(result, status) {

                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                  // 마커, 커스텀 오버레이가 표시될 위치
                  var position = new kakao.maps.LatLng(result[0].y, result[0].x);

                  // 마커에 변환된 위도/경도 넘겨서 저장함
                  var marker = new kakao.maps.Marker({
                    position: position,
                    image: icon
                  });
                  marker.setMap(map); // 마커가 지도 위에 표시되도록 설정


                  //커스텀 오버레이에 표시될 텍스트
                  var content = `
                    <div class="customoverlay">
                      <a href="board${errandPlace[i].id}" >
                        <span class="title">${errandPlace[i].name}</span>
                      </a>
                    </div>
                  `;

                  // 커스텀 오버레이를 생성합니다
                  var customOverlay = new kakao.maps.CustomOverlay({
                      position: position,
                      content: content,
                      yAnchor: 1
                  });
                  customOverlay.setMap(map); // 커스텀 오버레이가 지도 위에 표시되도록 설정합니다.
                }
              });
            }
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