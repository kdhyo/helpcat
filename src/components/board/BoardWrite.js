import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import FileUpload from "./FileUpload";

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
          placeholder="의뢰 지역을 설정해주세요"
            className="writetitleinput2"
            onChange={(e) => this.setState({ address1: e.target.value })}
          ></input>
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
              onCompleted={(data) => this._confirm(data)}
            >
              {(mutation) => (
                <input className="writesubmit" onClick={mutation} value="제출" readOnly></input>
              )}
            </Mutation>
            
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
  _confirm = async (data) => {
    this.props.history.push(`/`);
  };

  reload() {
    window.location.reload();
  }
}

export default BoardWrite;
