/*global kakao*/
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";
import AddressModal from "../utils/daumPostcode";


const BOARD_UPROAD_MUTATION = gql`
  mutation BoardUproadMutation(
    $title: String!
    $contents: String!
    $price: Int!
    $address1: String
    $address2: String
    $lat: Float
    $lon: Float
    $imgFiles: [String!]
    $startAt: DateTime
    $endAt: DateTime
  ) {
    addService(
      title: $title
      contents: $contents
      price: $price
      address1: $address1
      address2: $address2
      lat: $lat
      lon: $lon
      imgFiles: $imgFiles
      startAt: $startAt
      endAt: $endAt
    )
  }
`;

class BoardWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      price: Number,
      address1: "",
      address2: "",
      lat: Number,
      lon: Number,
      imgFiles: [],
      startAt: Date(),
      endAt: Date(),
    };
  }

  changePickerData(target, value) {
    this.setState({
      [target]: value,
    });
  }

  updateImages = (newImages) => {
    this.setState({
      imgFiles: newImages,
    });
  };

  render() {
    const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    let {
      title,
      contents,
      price,
      address1,
      address2,
      lat,
      lon,
      imgFiles,
      startAt,
      endAt,
    } = this.state;

    const takeAddress = (takeAddress) => {
      this.setState({
        address1: takeAddress,
      });
      getLatLon();
    };

    const getLatLon = () => {
      const mapScript = document.createElement("script");
      mapScript.async = true;
      mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false&libraries=services`;
      document.head.appendChild(mapScript);
      mapScript.onload = () => {
        kakao.maps.load(() => {
          // 카카오 맵이 로딩이 다 되면
          // 주소-좌표 변환 객체를 생성합니다
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(this.state.address1, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              let lat = Number(result[0].y); // 위도
              let lon = Number(result[0].x); // 경도
              lonlatstate(lat, lon);
            }
          });
        });
      };
      return <></>;
    };

    const lonlatstate = (klat, klon) => {
      this.setState({
        lat: klat,
        lon: klon,
      });
    };

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="writeform10">
          <img alt="글쓰기" className="nomargin" src="writecat.png" width="80px"></img>
          <div className="writeformgruop1">
          <div className="writetitle">제목
          <input
            placeholder="의뢰 제목을 입력해주세요"
            className="writetitleinput2"
            onChange={(e) => this.setState({ title: e.target.value })}
          ></input>
          </div>
          <div className="writecontent">내용
          <textarea
          placeholder="의뢰 내용을 적어주세요"
            className="writecontentinput2"
            onChange={(e) => this.setState({ contents: e.target.value })}
          ></textarea>
          </div>
          <div className="writecontent">비용
          <input
          placeholder="의뢰 비용을 숫자로 입력해주세요"
            className="writetitleinput2"
            onChange={(e) => this.setState({ price: Number(e.target.value) })}
          ></input>
          </div>
          <div className="writecontent">주소
          <input
            className="writetitleinput2"
            value={address1}
            readOnly
            type="text"
            placeholder="우편번호 찾기를 이용해주세요"
            onChange={(e) => this.setState({ address1: e.target.value })}
          ></input>
          <AddressModal refreshFunction={takeAddress.bind(this)} />
          </div>
          <div className="writecontent">상세
          <input
          placeholder="의뢰 지역의 자세한 위치를 안내해주세요"
            className="writetitleinput2"
            onChange={(e) => this.setState({ address2: e.target.value })}
          ></input>
          </div>
          </div>
          {/* DropZone */}
          <div className="writecontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;파일 첨부
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          미리보기</div>
          <div className="fileuploader">
          <FileUpload refreshFunction={this.updateImages.bind(this)} />
          </div>
          <div className="writeformgruop2">
          </div>
          <div className="startday">
            <KeyboardDateTimePicker
              disableToolbar
              value={this.state.startAt}
              onChange={this.changePickerData.bind(this, "startAt")}
              format="yyyy/MM/DD LT"
              label="시작 예정일"
              KeyboardButtonProps={{ "aria-label": "change time" }}
            />
          </div>
          <div className="endday">
            <KeyboardDateTimePicker
              disableToolbar
              value={this.state.endAt}
              onChange={this.changePickerData.bind(this, "endAt")}
              format="yyyy/MM/DD LT"
              label="종료 예정일"
              KeyboardButtonProps={{ "aria-label": "change time" }}
            />
          </div>
          <form>
            <Link to={"/"}>
              <Mutation
                mutation={BOARD_UPROAD_MUTATION}
                variables={{
                  title,
                  contents,
                  price,
                  address1,
                  address2,
                  lat,
                  lon,
                  imgFiles,
                  startAt,
                  endAt,
                }}
              >
                {(mutation) => (
                  <input className="writesubmit" onClick={mutation} value="제출" readOnly></input>
                )}
              </Mutation>
            </Link>
            <input
              type="reset"
              className="writereset"
              onClick={this.reload}
              readOnly
              value="초기화"
            ></input>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    );
  }

  reload() {
    window.location.reload();
  }
}

export default BoardWrite;
