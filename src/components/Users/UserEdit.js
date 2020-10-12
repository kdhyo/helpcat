/*global kakao*/
import React, { Component } from "react";
import { Query } from "react-apollo";
import AddressModal from "../utils/daumPostcode";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import ErrorNotLogin from "../basics/ErrorNotLogin";

const USER_DATA_QUERY = gql`
  query {
    me {
      email
      nickName
      userName
      gender
      birth
      address1
      address2
      id
      userName
      address1
    }
  }
`;

const USER_EDIT_MUTATION = gql`
  mutation editUser( $nickName: String! $address1: String! $address2: String! $lat: Float! $lon: Float! $phone: String!){
    editUser(nickName: $nickName, address1: $address1 address2: $address2 lat: $lat lon: $lon phone: $phone)
  }
`
class UserEdit extends Component {
  state = {
    email: "",
    emailComplete: false,
    emailNotComplete: false,
    emailAuthenticationValue: false, //이메일 인증코드 값
    emailUserInput: null, // 이메일 인증코드 사용자 입력값
    password: "",
    userName: "",
    nickName: "",
    gender: "",
    phone: "",
    address1: "",
    address2: "",
    birth: "",
    lat: Number,
    lon: Number,
    firstInData: false,
  };
  render() {
    const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

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
        <h2>유저 정보 수정</h2>
        <Query query={USER_DATA_QUERY}>
          {({ loading, error, data }) => {
            if (loading){
              return (
                <div>Loading...
                </div>
              )
            }
            if (error){return <ErrorNotLogin />}
            const myData = data
            const firstInData = this.state.firstInData
            if(firstInData === false){
              this.state = myData.me
              this.state.firstInData = true
            }
            const {
              email,
              password,
              userName,
              nickName,
              gender,
              phone,
              address1,
              address2,
              birth,
              lat,
              lon,
            } = this.state;
            return (
              <>
                <div className="signup">
                  <form>
                    <div className="signupform">
                      <img alt="회원가입" className="nomargin" src="signupcat.png" width="80px"></img>
                      <div className="email">
                        <input
                          className="signupinput1"
                          value={this.state.email}
                          onChange={(e) => this.setState({ email: e.target.value })}
                          type="text"
                          placeholder="인증받으실 이메일을 입력해주세요"
                        />
                      </div>
                    </div>
                  </form>
                  <form>
                    <div className="signupform2">
                      <div className="nickName">
                        <input
                          className="signupinput3"
                          value={nickName}
                          onChange={(e) => this.setState({ nickName: e.target.value })}
                          type="text"
                          placeholder="사용할 닉네임을 입력해주세요"
                        />
                      </div>
                      <div className="userName">
                        <input
                          value={userName}
                          onChange={(e) => this.setState({ userName: e.target.value })}
                          type="text"
                          placeholder="사용자 이름을 입력해주세요"
                        />
                      </div>
                    </div>
                  </form>
                  <form>
                    <div className="signupform3">
                      <div className="gender">
                        <label>
                          <input
                            value="M"
                            onChange={(e) => this.setState({ gender: e.target.value })}
                            type="radio"
                            name="gender"
                          />{" "}
                          남자
                        </label>
                        <label>
                          <input
                            value="W"
                            onChange={(e) => this.setState({ gender: e.target.value })}
                            type="radio"
                            name="gender"
                          />{" "}
                          여자
                        </label>
                      </div>
                      <div className="birth">
                        <input
                          value={birth}
                          onChange={(e) => this.setState({ birth: e.target.value })}
                          type="text"
                          placeholder="생년월일을 -없이 입력해주세요&nbsp;&nbsp;&nbsp;&nbsp;ex)971006"
                        />
                      </div>
                      <div className="phone">
                        <input
                          value={phone}
                          onChange={(e) => this.setState({ phone: e.target.value })}
                          type="text"
                          placeholder="전화번호를 -없이 입력해주세요&nbsp;&nbsp;&nbsp;&nbsp;ex)01012345678"
                        />
                      </div>
                      <div className="address">
                        <input
                          value={address1}
                          readOnly
                          type="text"
                          placeholder="우편번호 찾기를 이용해주세요"
                        />
                        <AddressModal refreshFunction={takeAddress.bind(this)} />
                      </div>
                      <div className="address">
                        <input
                          value={address2}
                          onChange={(e) => this.setState({ address2: e.target.value })}
                          type="text"
                          placeholder="상세주소를 입력해주세요"
                        />
                      </div>
                      <div>
                        <Mutation
                          mutation={USER_EDIT_MUTATION}
                          variables={{
                            nickName,
                            phone,
                            address1,
                            address2,
                            lat,
                            lon,
                          }}
                          onCompleted={(data) => this._confirm(data)}
                        >
                          {(mutation) => (
                            <input className="submit" onClick={mutation} readOnly value="수정하기"></input>
                          )}
                        </Mutation>
                        <input
                          type="reset"
                          className="reset"
                          onClick={this.reload}
                          readOnly
                          value="초기화"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )
          }
        }
        </ Query>
      </>
    );
  }
  _confirm = async (data) => {
    window.alert("정상적으로 수정되었습니다.")
    this.props.history.push(`/userInfor`);
  };
}

export default UserEdit;
