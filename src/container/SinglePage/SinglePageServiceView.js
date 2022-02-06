import React, { useState, useContext } from "react";
// import { useLocation } from "library/hooks/useLocation";
import Loader from "components/Loader/Loader";
import useWindowSize from "library/hooks/useWindowSize";
import Location from "./Location/Location";
import AddsPlaceholder from "container/Home/AddsPlaceholder/AddsPlaceholder";
import { Messages, LOGIN_PAGE } from "settings/constant";
import { useHistory } from "react-router-dom";
import SinglePageWrapper, {
  PostImage,
  ImageWrapper,
  ResortInfoWrapper,
  TitleAndPriceWrapper,
  PriceArea,
  ArabicText,
  Title,
  NextButton,
} from "./SinglePageView.style";
import "./SinglePageView.css";
// import PostImageGallery from "./ImageGallery/ImageGallery";
import useDataApi from "library/hooks/useDataApi";
import isEmpty from "lodash/isEmpty";
// import locationIcon from "../../assets/location-pin.svg";
import verifiedIcon from "../../assets/Verified.svg";
import resortImage from "../../assets/addresort.jpg";
import Chip from "@mui/material/Chip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AuthContext } from "../../context/AuthProvider";

import ChatIcon from "../../assets/whatsapp.svg";

const SinglePage = ({ match }) => {
  const { loggedIn } = useContext(AuthContext);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const history = useHistory();
  const [additionalFeatures, setAdditionalFeatures] = useState([
    { price: "ريال10", name: "early Checkin", selected: false },
    { price: "ريال10", name: "Heater", selected: false },
    { price: "ريال10", name: "Full bathroom", selected: false },
    { price: "ريال10", name: "Air conditioning", selected: false },
    { price: "ريال10", name: "TV", selected: false },
  ]);
  // const { href } = useLocation();
  // const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();

  let url = "/data/hotel-single.json";
  if (!match.params.slug) {
    url += match.params.slug;
  }
  const { data, loading } = useDataApi(url);
  if (isEmpty(data) || loading) return <Loader />;
  const {
    reviews,
    rating,
    ratingCount,
    price,
    title,
    gallery,
    location,
    content,
    amenities,
    author,
  } = data[0];
  const images = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
  ];

  return (
    <SinglePageWrapper>
      <ImageWrapper>
        <PostImage>
          <div>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
              {images.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div
                      style={{
                        // backgroundColor: "green",
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        alt="resortImage"
                        src={resortImage}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      ></img>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={
                width < 550
                  ? 3
                  : (width >= 550) & (width < 1200)
                  ? 4
                  : (width >= 1200) & (width < 1500)
                  ? 5
                  : images.length < 6
                  ? images.length
                  : 6
              }
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {images.map((item, idx) => {
                return (
                  <div>
                    <div
                      style={{
                        // backgroundColor: "green",
                        height: width < 1500 ? " 100px" : "160px",
                        width: width < 1500 ? " 100px" : "220px",
                        margin: "10px 0px",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        alt="resortImage"
                        src={resortImage}
                        // src={item[idx]}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      ></img>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </PostImage>
        <ResortInfoWrapper>
          <TitleAndPriceWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "50%",
                marginTop: "0px",
              }}
            >
              <Title>{title}</Title>
              <img
                alt="Verified"
                style={{ height: "24px", width: "18px", marginLeft: "5px" }}
                src={verifiedIcon}
              />
            </div>
            <PriceArea>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {/* <startFromText>start from</startFromText> */}
                {"  "}
                <p
                  style={{
                    margin: "0px",
                    marginRight: "10px",
                    // fontWeight: "bold",
                    fontSize: "18px",
                    color: "#A5A5A5",
                  }}
                >
                  start from
                </p>
                <ArabicText>ريال</ArabicText>
                <p
                  style={{
                    color: "#ED702D",
                    margin: "0px",
                    fontWeight: "bold",
                  }}
                >
                  1000 /
                </p>

                <p
                  style={{
                    textDecoration: "line-through",
                    margin: "0px",
                    fontWeight: "bold",
                  }}
                >
                  2000
                </p>
                {"  "}
              </div>
            </PriceArea>
          </TitleAndPriceWrapper>
          {/* <div>
            <p
              style={{ color: "#ED702D", fontSize: "24px", fontWeight: "bold" }}
            >
              1.4k Reviews
            </p>
          </div> */}
        </ResortInfoWrapper>
      </ImageWrapper>
      <div
        style={{
          // border: "1px solid red",
          paddingTop: "50px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <Title>Description</Title>
        <p
          style={{
            margin: "0px",
            marginTop: "25px",
            color: "#A5A5A5",
            fontSize: "20px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <hr style={{ color: "#A5A5A5", marginTop: "20px" }}></hr>
      </div>
      {/* <Amenities amenities={amenities} /> */}
      <Location location={data[0]} />

      {/* <Pricing></Pricing> */}
      <div
        style={{
          border: "1px solid #F5F4F4",
          borderRadius: "8px",
          boxShadow: "0px 3px 6px #00000008",
          padding: "20px 20px",
        }}
      >
        <p
          style={{
            margin: "0px",
            marginBottom: "10px",
            // marginTop: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Available Services
        </p>
        {additionalFeatures.map((item, index) => {
          return (
            <Chip
              key={index}
              onClick={() => {
                let newArray = [...additionalFeatures];
                console.log("new Array is", newArray);
                newArray[index].selected = !newArray[index].selected;
                console.log("new Array is", newArray);
                setAdditionalFeatures(newArray);
              }}
              label={item.price + "  " + item.name}
              sx={{
                paddingLeft: "5px",
                marginBottom: "10px",
                marginRight: "10px",
                fontFamily: "Noto Kufi Arabic, sans-serif",
                backgroundColor: item.selected ? "#ED702D28" : "white",
                color: item.selected ? "#ED702D" : "#ADADAD",

                borderWidth: item.selected ? "0px" : "2px",

                borderStyle: "solid",
                borderColor: item.selected ? "#ED702D28" : "#E3E3E3",
              }}
            />
          );
        })}
      </div>

      <AddsPlaceholder horizontalMargin={true}></AddsPlaceholder>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextButton
          style={{ borderRadius: "70px", textAlign: "center" }}
          onClick={() => {
            {
              loggedIn && history.push(Messages);
            }
            {
              !loggedIn && history.push(LOGIN_PAGE);
            }
          }}
        >
          Chat with us
          <div style={{ height: "30px", width: "30px" }}>
            <img
              alt=""
              src={ChatIcon}
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
        </NextButton>
      </div>
      {/* <ReviewsAndRatings></ReviewsAndRatings> */}
    </SinglePageWrapper>
  );
};

export default SinglePage;
