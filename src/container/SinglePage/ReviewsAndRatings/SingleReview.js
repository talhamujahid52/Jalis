import React from "react";
import starIcon from "../../../assets/star.svg";
import reviewProfile from "../../../assets/reviewProfile.png";
import { TopDiv, MiddleDiv } from "./SingleReview.style";
const SingleReview = () => {
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "white",
        borderRadius: "20px",
        margin: "10px 0px",
      }}
    >
      {/* Top Div */}
      <TopDiv>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{
              height: "75px",
              width: "75px",
              borderRadius: "100px",
              backgroundColor: "green",
            }}
          >
            <img
              alt=""
              style={{
                height: "100%",
                width: "100%",
              }}
              src={reviewProfile}
            ></img>
          </div>
          <p
            style={{
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "0px",
              marginLeft: "10px",
              marginTop: "15px",
            }}
          >
            Marks Anderson
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {new Array(5).fill(0).map((item, index) => {
            return (
              <img
                alt=""
                key={index}
                style={{
                  height: "20px",
                  width: "15px",
                  margin: "0px",
                  marginLeft: "2px",
                }}
                src={starIcon}
              />
            );
          })}
          <p
            style={{
              color: "black",
              fontSize: "16px",
              fontWeight: "bolder",
              margin: "0px",
              marginLeft: "10px",
            }}
          >
            4.5
          </p>
        </div>
      </TopDiv>
      <MiddleDiv>
        <p style={{ color: "#A5A5A5", fontSize: "20px", margin: "0px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bolder",
            margin: "0px",
            marginTop: "10px",
          }}
        >
          010/10/2020 10:20 am
        </p>
      </MiddleDiv>
    </div>
  );
};

export default SingleReview;
