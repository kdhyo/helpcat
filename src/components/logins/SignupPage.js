/*global kakao*/
import React, { Component } from "react";
import API from "../../config/apikey.json";
import { AUTH_TOKEN } from "../../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import AddressModal from "../utils/daumPostcode";

const SIGNUP_MUTATION = gql`
  mutation signup(
    $email: Email!
    $password: String!
    $userName: String!
    $nickName: String!
    $gender: String!
    $phone: String!
    $address1: String!
    $address2: String!
    $birth: String!
    $lat: Float!
    $lon: Float!
  ) {
    signup(
      email: $email
      password: $password
      userName: $userName
      nickName: $nickName
      gender: $gender
      phone: $phone
      address1: $address1
      address2: $address2
      birth: $birth
      lat: $lat
      lon: $lon
    ) {
      token
    }
  }
`;

const SEND_EMAIL_MUTATION = gql`
  mutation SendEmailMutation($email: String!) {
    sendEmail(email: $email)
  }
`;

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  emailValueChecking() {
    if (this.state.emailUserInput === this.state.emailAuthenticationValue) {
      this.setState({
        emailComplete: true,
      });
    } else {
      this.setState({
        emailNotComplete: true,
      });
    }
  }
  

  render() {
    const API_KEY = API.kakaoMapAPI.API_KEY;
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

    console.log(this.state.emailAuthenticationValue);
    return (
      <>
        <div className="signup">
          <form>
            <div className="signupform">
              <img alt="회원가입" className="nomargin" src="signupcat.png" width="80px"></img>
              <div className="email">
                <input
                  className="signupinput1"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="text"
                  placeholder="인증받으실 이메일을 입력해주세요"
                />
              </div>
              <Mutation
                mutation={SEND_EMAIL_MUTATION}
                variables={{ email }}
                onCompleted={(data) => this._sendconfirm(data)}
              >
                {(mutation) => (
                  <>
                    {this.state.emailAuthenticationValue ? (
                      <>
                        <h1>발송 되었습니다!</h1>
                        <input
                          className="mailsubmit"
                          readOnly
                          onClick={mutation}
                          value="재발송하기"
                        ></input>
                      </>
                    ) : (
                      <input
                        className="mailsubmit"
                        readOnly
                        onClick={mutation}
                        value="이메일 인증"
                      ></input>
                    )}
                  </>
                )}
              </Mutation>
              <div className="email">
                <input
                  className="signupinput2"
                  onChange={(e) => this.setState({ emailUserInput: e.target.value })}
                  type="text"
                  placeholder="전송받으신 인증코드를 입력해주세요"
                />
              </div>
              {!this.state.emailComplete ? ( //이메일이 인증이 안되었는지 묻기
                <>
                  {this.state.emailNotComplete ? ( //이메일 인증 안된상태로 버튼 눌렀는지 묻기
                    <div>인증값이 올바르지 않습니다.</div>
                  ) : (
                    ""
                  )}
                  <input
                    className="mailsubmit"
                    readOnly
                    value="인증값 확인"
                    onClick={this.emailValueChecking.bind(this)}
                  ></input>
                </>
              ) : (
                <div>이메일이 인증되었습니다.!</div>
              )}
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
              <div className="password">
                <input
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
              <div className="passwordcheck">
                <input type="password" placeholder="비밀번호를 재입력해주세요"></input>
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
                  placeholder="생년월일을 -없이 입력해주세요                        ex)971006"
                />
              </div>
              <div className="phone">
                <input
                  value={phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  type="text"
                  placeholder="전화번호를 -없이 입력해주세요                        ex)01012345678"
                />
              </div>
              <div className="address">
                <AddressModal refreshFunction={takeAddress.bind(this)} />
                <input
                  value={address1}
                  readOnly
                  type="text"
                  placeholder="도로명주소를 입력해주세요"
                />
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
                {this.state.emailComplete ? (
                  <Mutation
                    mutation={SIGNUP_MUTATION}
                    variables={{
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
                    }}
                    onCompleted={(data) => this._confirm(data)}
                  >
                    {(mutation) => (
                      <input className="submit" onClick={mutation} readOnly value="제출"></input>
                    )}
                  </Mutation>
                ) : (
                  <input
                    className="submit"
                    onClick={this.emailAlert.bind(this)}
                    readOnly
                    value="제출"
                  ></input>
                )}
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
    );
  }
  emailAlert() {
    alert("이메일 인증이 필요합니다.");
  }
  reload() {
    window.location.reload();
  }
  _sendconfirm = async (data) => {
    this.setState({
      emailAuthenticationValue: data.sendEmail,
    });
  };

  _confirm = async (data) => {
    const tokendata = data.signup.token;
    this._saveUserData(tokendata);
    this.props.history.push(`/`);
  };

  _saveUserData = (tokendata) => {
    localStorage.setItem(AUTH_TOKEN, tokendata);
  };
}

export default SignupPage;
