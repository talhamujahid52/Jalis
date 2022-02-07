import React from "react";
import { SingleChatWrapper, ImageWrapper } from "./SingleChat.style";
import profileImg from "../../../assets/addresort.jpg";
// import colors from "react-multi-date-picker/plugins/colors";
import { useHistory } from "react-router-dom";
import { DetailedChat } from "../../../settings/constant";
import useWindowSize from "library/hooks/useWindowSize";
const SingleChat = (props) => {
  const { width } = useWindowSize();
  const history = useHistory();
  return (
    <SingleChatWrapper
      onClick={() => {
        history.push(DetailedChat);
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <ImageWrapper>
          <img alt="" src={profileImg} />
        </ImageWrapper>
        <div>
          <p
            style={{
              margin: "0px",
              fontSize: width > 900 ? "16px" : "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Abid Iqbal
          </p>
          <p
            style={{
              margin: "0px",
              fontSize: width > 900 ? "14px" : "12px",
              color: "#A5A5A5",
            }}
          >
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
          marginRight: width > 900 ? "40px" : "10px",
          marginLeft: "10px",
        }}
      >
        <p
          style={{
            margin: "0px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          2min ago
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
