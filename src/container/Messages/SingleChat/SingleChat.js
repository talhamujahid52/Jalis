import React from "react";
import { SingleChatWrapper, ImageWrapper } from "./SingleChat.style";
import profileImg from "../../../assets/addresort.jpg";
import colors from "react-multi-date-picker/plugins/colors";
import { useHistory } from "react-router-dom";
import { DetailedChat } from "../../../settings/constant";
const SingleChat = (props) => {
  const history = useHistory();
  return (
    <SingleChatWrapper
      onClick={() => {
        history.push(DetailedChat);
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <ImageWrapper>
          <img src={profileImg} />
        </ImageWrapper>
        <div>
          <p
            style={{
              margin: "0px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Abid Iqbal
          </p>
          <p style={{ margin: "0px", fontSize: "14px", color: "#A5A5A5" }}>
            Lorem ipsum dolor sit amet, consetetur sa dips... dipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // border: "1px solid red",
          marginRight: "40px",
        }}
      >
        <p
          style={{
            margin: "0px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          2 min ago
        </p>
        {props.show && (
          <div
            style={{
              margin: "0px",
              backgroundColor: "#ED702D",
              height: "30px",
              width: "30px",
              color: "white",
              borderRadius: "15px",
              textAlign: "center",
              paddingTop: "5px",
            }}
          >
            3
          </div>
        )}
      </div>
    </SingleChatWrapper>
  );
};

export default SingleChat;
