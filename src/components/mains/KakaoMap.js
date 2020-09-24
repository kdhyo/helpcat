/*global kakao*/
import React, { Component } from "react"
import API from "../../config/apikey.json"
import { AUTH_TOKEN } from '../../constants'


class KakaoMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapGpsOn: false,
      tokenData: localStorage.getItem("auth-token"),
      userData: Object
    };
  }

  GPSOFF() {
    console.log("GPSOFF")
    this.setState(() => ({
      mapGpsOn: false
    }));
  };
  GPSON() {
    console.log("GPSON")
    this.setState(() => ({
      mapGpsOn: true
    }));
  };

  componentDidMount(){ //render가 끝나면 바로실행
    if(this.props.data){
      this.setState(() => ({
        userData: this.props.data.user
      }));
    }
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    const API_KEY = API.kakaoMapAPI.API_KEY;
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);
    mapScript.onload = () => {
      kakao.maps.load(() => { // 카카오 맵이 로딩이 다 되면
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // DB에서 온 심부름장소들 데이터
        var errandPlace = [
          {id:1, name:"이마트", place:'경기도 안양시 동안구 비산동 411-8'},
          {id:2, name:"종합운동장", place:'경기도 안양시 동안구 비산3동 평촌대로 389'},
          {id:3, name:"한양스포츠센터", place:'경기도 안양시 동안구 달안동 1101-2'},
          {id:4, name:"버거킹", place:'경기도 안양시 동안구 관양동 관악대로 312'},
        ];

        //마커 아이콘 바꾸기
        var icon = new kakao.maps.MarkerImage(
          'fixedmarker.gif', new kakao.maps.Size(61, 65),{
              offset: new kakao.maps.Point(36, 54),
              alt: "마커다냥",
              shape: "poly",
              coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
          }
        );

        // 로그인이 되어있고, 토글이 true이면 유저집으로 세팅 / false면 현재위치 지도 세팅
        if (authToken && !(this.state.mapGpsOn)) { //로그인 되있고, GPS기능 꺼져 있을때

          // GPS기능을 사용안할경우 유저의 집으로 지도의 메인을 정함
          geocoder.addressSearch(this.state.userData.address, function(result, status) {

            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {

              var lat = result[0].y, // 위도
              lon = result[0].x; // 경도

              //현재 위치로 메인을 잡아줌
              let container = document.getElementById("map");
              let options = {
                center: new kakao.maps.LatLng(lat, lon),
                level: 7
              };

              const map = new kakao.maps.Map(container, options);
              MarkersOverlay(map) // 유저집주소 맵에 심부름 마커뿌리기
              console.log("유저집 실행")
            }
          });
        }
        else if(!authToken && !(this.state.mapGpsOn)){ //로그인 되있고, GPS기능 켜져 있을때
          var lat = 37.403625, // 위도 ,
          lon = 126.930337; // 경도

          //현재 위치로 메인을 잡아줌
          let container = document.getElementById("map");
          let options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 7
          };
          const map = new kakao.maps.Map(container, options);
          MarkersOverlay(map)// 현재위치 맵에 심부름 마커뿌리기
          console.log("디폴트 대림대학교 실행")
        }
        else if(this.state.mapGpsOn){ //비로그인이고, GPS기능 꺼져있을때

          // GPS로 현재 위치를 가져와 지도의 메인으로 정함
          navigator.geolocation.getCurrentPosition(function(result) {
            var lat = result.coords.latitude, // 위도
                lon = result.coords.longitude; // 경도

            //현재 위치로 메인을 잡아줌
            let container = document.getElementById("map");
            let options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 7
            };
            const map = new kakao.maps.Map(container, options);
            MarkersOverlay(map)// 현재위치 맵에 심부름 마커뿌리기
            console.log("현재위치 실행")
          });
        }


        function MarkersOverlay(map) {
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
    }

    return (
      <>
        <main id="map" className="map">
        </main>
        <button className={this.state.mapGpsOn ? "mapbutton1": "mapbutton1_Clicked"} onClick={this.GPSOFF = this.GPSOFF.bind(this)}>
          {this.state.mapGpsOn ? "내집" : "내집"}
        </button>
        <button className={this.state.mapGpsOn ? "mapbutton2_Clicked": "mapbutton2"} onClick={this.GPSON = this.GPSON.bind(this)}>
          {this.state.mapGpsOn ? "현재위치" : "현재위치"}
        </button>
      </>
    )
  }
}

export default KakaoMap