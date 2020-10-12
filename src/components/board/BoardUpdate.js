/*global kakao*/
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import FileReUpload from "./FileReUpload";
import AddressModal from "../utils/daumPostcode";


const BOARD_UPDATE_MUTATION = gql`
  mutation BoardUpdateMutation(
    $id: Int!
    $title: String!
    $contents: String!
    $price: Int!
    $address1: String
    $address2: String
    $lat: Float
    $lon: Float
    $addImgs: [String!]
    $removeImgs: [String!]
    $startAt: DateTime
    $endAt: DateTime
  ) {
    editService(
      id: $id
      title: $title
      contents: $contents
      price: $price
      address1: $address1
      address2: $address2
      lat: $lat
      lon: $lon
      addImgs: $addImgs
      removeImgs: $removeImgs
      startAt: $startAt
      endAt: $endAt
    )
  }
`;

class BoardUpdate extends Component {
  state = {
    title: this.props.location.serviceBoardData.title,
    contents: "",
    price: Number,
    address1: "",
    address2: "",
    lat: Number,
    lon: Number,
    imgFiles: [],
    addImgs:[],
    removeImgs:[],
    startAt: Date(),
    endAt: Date(),
  };

  changePickerData(target, value) {
    this.setState({
      [target]: value,
    });
  }

  updateImages = (newImages, removeImages, newImage) => {
    if(removeImages === undefined){
      let newimg = this.state.addImgs //기존의 새로들어온 이미지 담고있는 배열 잠시 저장
      if(newimg[0] === undefined){
        this.setState({
          imgFiles: newImages,
          addImgs: [newImage]
        });
      }else{
        this.setState({
          imgFiles: newImages,
          addImgs: [newImage, ...newimg],
        });
      }
    }else{
      let rmimg = this.state.removeImgs //기존의 삭제할 이미지 담고있는 배열 잠시 저장
      if(rmimg[0] === undefined){
        this.setState({
          imgFiles: newImages,
          removeImgs: [removeImages],
        });
      }else{
        this.setState({
          imgFiles: newImages,
          removeImgs: [removeImages, ...rmimg],
        });
      }
    }
  };

  render() {
    const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const beforeData = this.props.location.serviceBoardData;
    const { title, contents, price, address1, address2, imgFiles, addImgs, removeImgs, startAt, endAt, lat, lon } = this.state;
    const id = Number(beforeData.id);

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
      <>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className="writeform">
            <div className="writetitle">제목</div>
            <input
              className="writetitleinput"
              placeholder={beforeData.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            ></input>
            <div className="writecontent">내용</div>
            <textarea
              className="writecontentinput"
              placeholder={beforeData.contents}
              onChange={(e) => this.setState({ contents: e.target.value })}
            ></textarea>
            <div className="writecontent">가격</div>
            <input
              className="writetitleinput"
              placeholder={beforeData.price}
              onChange={(e) => this.setState({ price: Number(e.target.value) })}
            ></input>
            <div className="writecontent">도로명주소</div>
            <input
              className="writetitleinput"
              value={address1}
              readOnly
              type="text"
              placeholder={beforeData.address1}
              onChange={(e) => this.setState({ address1: e.target.value })}
            ></input>
            <AddressModal refreshFunction={takeAddress.bind(this)} />
            <div className="writecontent">상세주소</div>
            <input
              className="writetitleinput"
              placeholder={beforeData.address2}
              onChange={(e) => this.setState({ address2: e.target.value })}
            ></input>
            <FileReUpload
              imgLinks={beforeData.serviceimgfiles}
              refreshFunction={this.updateImages.bind(this)}
            />
            <KeyboardDateTimePicker
              disableToolbar
              value={startAt ? startAt : beforeData.startAt}
              onChange={this.changePickerData.bind(this, "startAt")}
              variant="inline"
              format="yyyy/MM/DD LT"
              margin="normal"
              label="시작 예정일"
              style={{ width: "50%" }}
              KeyboardButtonProps={{ "aria-label": "change time" }}
            />
            <KeyboardDateTimePicker
              disableToolbar
              value={endAt ? endAt : beforeData.endAt}
              onChange={this.changePickerData.bind(this, "endAt")}
              variant="inline"
              format="yyyy/MM/DD LT"
              margin="normal"
              label="종료 예정일"
              style={{ width: "50%" }}
              KeyboardButtonProps={{ "aria-label": "change time" }}
            />
            <form>
              <a href="/board">
                <Mutation
                  mutation={BOARD_UPDATE_MUTATION}
                  variables={{
                    id,
                    title,
                    contents,
                    price,
                    address1,
                    address2,
                    lat,
                    lon,
                    addImgs,
                    removeImgs,
                    startAt,
                    endAt,
                  }}
                >
                  {(mutation) => (
                    <input className="writesubmit" onClick={mutation} value="제출" readOnly></input>
                  )}
                </Mutation>
              </a>
              <input className="writereset" type="reset"></input>
            </form>
          </div>
        </MuiPickersUtilsProvider>
      </>
    );
  }
}

export default BoardUpdate;
