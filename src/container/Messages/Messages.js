import React from "react";
import {
  MessagesHeadingText,
  MessagesWrapper,
  ImageWrapper,
  ChatsWrapper,
} from "./Messages.style";
import messages from "../../assets/Messages.svg";
import SingleChat from "./SingleChat/SingleChat";

const Messages = () => {
  return (
    <MessagesWrapper>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <ImageWrapper>
          <img src={messages} alt="logo" />
        </ImageWrapper>
        <div>
          <MessagesHeadingText> Messages</MessagesHeadingText>
          <p style={{ color: "#A5A5A5", margin: "0px", fontSize: "16px" }}>
            {" "}
            Connect with your clients
          </p>
        </div>
      </div>
      <ChatsWrapper>
        <SingleChat />
        <SingleChat show={true} />
        <SingleChat />
        <SingleChat show={true} />
        <SingleChat />
      </ChatsWrapper>
    </MessagesWrapper>
  );
};

export default Messages;
