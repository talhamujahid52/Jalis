import React, { Component, createRef } from "react";

import "./DetailedChat.css";
// import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import sendIcon from "../../../assets/SendIcon.svg";
export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  onClickSend = () => {
    if (this.state.msg !== "") {
      this.chatItms.push({
        key: 1,
        type: "",
        msg: this.state.msg,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      });
      this.setState({ chat: [...this.chatItms] });
      this.scrollToBottom();
      this.setState({ msg: "" });
    }
  };

  render() {
    return (
      <div className="outer-Wrapper">
        <div className="main__chatcontent">
          <div className="content__header">
            <div className="blocks">
              <div className="current-chatting-user">
                {/* <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              /> */}
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "100px",
                    backgroundColor: "green",
                    marginRight: "20px",
                  }}
                ></div>
                <p>Tim Hover</p>
              </div>
            </div>

            {/* <div className="blocks">
              <div className="settings">
                <button className="btn-nobg">
                  <i className="fa fa-cog"></i>
                </button>
              </div>
            </div> */}
          </div>
          <div className="content__body">
            <div
              style={{
                fontweight: "bold",
                color: "#A5A5A5",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <p>Resort Name: xxxxxxxxxx</p>
            </div>
            <div className="chat__items">
              {this.state.chat.map((itm, index) => {
                return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={itm.image}
                  />
                );
              })}
              <div ref={this.messagesEndRef} />
            </div>
          </div>
          <div className="content__footer">
            <div className="sendNewMessage">
              {/* <button className="addFiles">
                <i className="fa fa-plus"></i>
              </button> */}
              <input
                type="text"
                placeholder="Type a message here"
                onChange={this.onStateChange}
                value={this.state.msg}
              />
              <button
                onClick={this.onClickSend}
                className="btnSendMsg"
                id="sendMsgBtn"
              >
                {/* <i className="fa fa-paper-plane"></i> */}

                <div
                  style={{ height: "30px", width: "30px", marginBottom: "5px" }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={sendIcon}
                  ></img>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
