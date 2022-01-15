import React, { Component } from "react";
// import Avatar from "../chatList/Avatar";

const Avatar = (props) => {
  return (
    <div
      className="avatar"
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "100px",
        backgroundColor: "pink",
        // marginRight: "20px",
      }}
    ></div>
  );
};

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div>
          <div className="chat__item__content">
            <div className="chat__msg">{this.props.msg}</div>
            {/* <div className="chat__meta">
            <span>16 mins ago</span>
            <span> 1.03PM</span>
          </div> */}
          </div>
          <div className="chat__meta">
            <span> 1:03PM</span>
          </div>
        </div>
        {/* <div
          style={{
            padding: "20px",
            backgroundColor: "#ED702D",
            borderRadius: "8px",
            marginRight: "20px",
          }}
        >
          <div style={{ color: "white" }}>{this.props.msg}</div>
        </div> */}
        {/* <Avatar></Avatar> */}
        {/* <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "100px",
            backgroundColor: "pink",
            // marginRight: "20px",
          }}
        ></div> */}
        {/* <Avatar isOnline="active" image={this.props.image} /> */}
      </div>
    );
  }
}
