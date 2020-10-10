import React, { Component } from "react";
import AlarmDetail from "./AlarmDetail";

class AlarmPage extends Component {
  state = {
    alarmState : false
  }

  alarmON() {
    if(!this.state.alarmState){
      this.setState({
        alarmState: true,
      })
    }
  }
  alarmOFF() {
    if(this.state.alarmState){
      this.setState({
        alarmState: false,
      })
    }
  }

  render() {
    const { alarmState }  = this.state
    console.log(alarmState)
    return (
      <>
        {!alarmState ?
        (
          <>
          <div onClick={this.alarmON.bind(this)} className="asider3">
            <img
              className="asiderpng"
              src="/alarm.png"
              width="px"
              title="알람"
              alt="알람"
            ></img>
          </div>
          </>
        ) : (
        <>
          <div onClick={this.alarmOFF.bind(this)} className="asider3">
            <img
              className="asiderpng"
              src="/alarm.png"
              width="px"
              title="알람"
              alt="알람"
            ></img>
          </div>
          <div className="asider3">
            <AlarmDetail />
          </div>
        </>
        )}
      </>
    );
  }
}
export default AlarmPage;
