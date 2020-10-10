import React, { Component } from "react";
import DaumPostCode from "react-daum-postcode";
class AddressModal extends Component {
  state = {
    address: "",
    fullAddress: "",
    isDaumPost: false,
  };

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  // postcode
  handleAddress = (data) => {
    let AllAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    this.setState({
      fullAddress: AllAddress,
      isDaumPost: false,
    });
    console.log(this.props);
    this.props.refreshFunction(AllAddress);
  };

  render() {
    // const { isModalShow, isModalClose } = this.props;
    // const { fullAddress } = this.state;
    const { isDaumPost } = this.state;
    // DaumPostCode style
    const width = 595;
    const height = 450;
    const modalStyle = {
      position: "absolute",
      top: "30%",
      left: "35%",
      zIndex: "100",
      border: "2px solid #bababa",
      overflow: "hidden",
    };
    return (
      <div className="modalRow">
        <div className="modalCell">
          <div className="cellFirst">
            <button className="postbtn" type="button" onClick={this.handleOpenPost}>
              <span>우편번호 찾기</span>
            </button>
          </div>
          {isDaumPost ? (
            <DaumPostCode
              onComplete={this.handleAddress}
              // autoClose
              width={width}
              height={height}
              style={modalStyle}
            />
          ) : (
            ""
          )}
          {/* <div className="addressBox">
            <input type="text" value={address} name="address" onChange={this.handleInput} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default AddressModal;
