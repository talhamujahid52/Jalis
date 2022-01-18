import React, { Fragment, useState } from "react";
import { useLocation } from "library/hooks/useLocation";
import Sticky from "react-stickynode";
import { Row, Col, Modal, Button } from "antd";
import Container from "components/UI/Container/Container";
import Loader from "components/Loader/Loader";
import useWindowSize from "library/hooks/useWindowSize";
import Description from "./Description/Description";
import Amenities from "./Amenities/Amenities";
import Location from "./Location/Location";
import ReviewsAndRatings from "./ReviewsAndRatings/ReviewsAndRatings";
import Review from "./Review/Review";
import Reservation from "./Reservation/Reservation";
import BottomReservation from "./Reservation/BottomReservation";
import TopBar from "./TopBar/TopBar";
import AddsPlaceholder from "container/Home/AddsPlaceholder/AddsPlaceholder";
import { Resource_Section_Selection } from "settings/constant";
import { useHistory } from "react-router-dom";
import SinglePageWrapper, {
  PostImage,
  ImageWrapper,
  ResortInfoWrapper,
  LocationWrapper,
  LocationArea,
  RatingWrapper,
  RatingText,
  RatingAndLocationWrapper,
  TitleAndPriceWrapper,
  PriceArea,
  ArabicText,
  Title,
  NextButton,
  startFromText,
} from "./SinglePageView.style";
import "./SinglePageView.css";
import PostImageGallery from "./ImageGallery/ImageGallery";
import useDataApi from "library/hooks/useDataApi";
import isEmpty from "lodash/isEmpty";
import locationIcon from "../../assets/location-pin.svg";
import verifiedIcon from "../../assets/Verified.svg";
import starIcon from "../../assets/star.svg";
import Pricing from "./Pricing/Pricing";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-carousel-minimal";
const SinglePage = ({ match }) => {
  const history = useHistory();
  const [additionalFeatures, setAdditionalFeatures] = useState([
    { price: "ريال10", name: "early Checkin", selected: false },
    { price: "ريال10", name: "Heater", selected: false },
    { price: "ريال10", name: "Full bathroom", selected: false },
    { price: "ريال10", name: "Air conditioning", selected: false },
    { price: "ريال10", name: "TV", selected: false },
  ]);
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
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
  const Imagesdata = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      // caption: `<div>
      //             San Francisco
      //             <br/>
      //             Next line
      //           </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      // caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      // caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      // caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      // caption: "Scotland",
    },
  ];

  return (
    <SinglePageWrapper>
      <ImageWrapper>
        <PostImage>
          <Carousel
            data={Imagesdata}
            time={2000}
            width="100%"
            height="500px"
            // captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="150px"
            // thumbnailHeight="200px"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              // maxHeight: "500px",
              // margin: "40px auto",
            }}
          />
        </PostImage>
        <ResortInfoWrapper>
          {/* <RatingAndLocationWrapper>
            <LocationWrapper>
              <div
                style={{
                  height: "20px",
                  width: "15px",
                  margin: "0px",
                  marginRight: "5px",
                }}
              >
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={locationIcon}
                />
              </div>
              <LocationArea>81 Pennsylvania Avenue, USA</LocationArea>
             
            </LocationWrapper>
            <RatingWrapper>
              <RatingText>4.1</RatingText>

              {new Array(5).fill(0).map((item, index) => {
                return (
                  <img
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
            </RatingWrapper>
          </RatingAndLocationWrapper> */}
          <TitleAndPriceWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "50%",
                marginTop: "40px",
              }}
            >
              <Title>{title}</Title>
              <img
                style={{ height: "24px", width: "18px", marginLeft: "5px" }}
                src={verifiedIcon}
              />
            </div>
            <PriceArea>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <startFromText>start from</startFromText> */}
                {"  "}
                <p style={{ margin: "0px" }}>start from</p>
                <ArabicText>ريال</ArabicText>
                <p style={{ color: "#ED702D", margin: "0px" }}>1000</p>/
                <p style={{ textDecoration: "line-through", margin: "0px" }}>
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
                borderWidth: "2px",
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
            history.push(Resource_Section_Selection);
          }}
        >
          Chat with us
        </NextButton>
      </div>
      {/* <ReviewsAndRatings></ReviewsAndRatings> */}
    </SinglePageWrapper>
  );
};

export default SinglePage;
