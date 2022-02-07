import React, { useState } from "react";
// import { useLocation } from "library/hooks/useLocation";
import Loader from "components/Loader/Loader";
import useWindowSize from "library/hooks/useWindowSize";
import Amenities from "./Amenities/Amenities";
import Location from "./Location/Location";
import ReviewsAndRatings from "./ReviewsAndRatings/ReviewsAndRatings";
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
  // startFromText,
} from "./SinglePageView.style";
import "./SinglePageView.css";
// import PostImageGallery from "./ImageGallery/ImageGallery";
import useDataApi from "library/hooks/useDataApi";
import isEmpty from "lodash/isEmpty";
import locationIcon from "../../assets/location-pin.svg";
import verifiedIcon from "../../assets/Verified.svg";
import resortImage from "../../assets/addresort.jpg";
import starIcon from "../../assets/star.svg";
import Pricing from "./Pricing/Pricing";
import Chip from "@mui/material/Chip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../../assets/Path208.svg";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import { Carousel } from "react-carousel-minimal";
// import ImageGallery from "react-image-gallery";
const SinglePage = ({ match }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const history = useHistory();
  const [additionalFeatures, setAdditionalFeatures] = useState([
    { price: "10", currency: "ريال", name: "early Checkin", selected: false },
    { price: "10", currency: "ريال", name: "Heater", selected: false },
    { price: "10", currency: "ريال", name: "Full bathroom", selected: false },
    {
      price: "10",
      currency: "ريال",
      name: "Air conditioning",
      selected: false,
    },
    { price: "10", currency: "ريال", name: "TV", selected: false },
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
  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];
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
                  <div>
                    <div
                      style={{
                        // backgroundColor: "green",
                        height: width > 800 ? "400px" : "200px",
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
            {/* <h4>Second Slider</h4> */}
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={
                width < 550
                  ? 3
                  : (width >= 550) & (width < 900)
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
                        height: width < 1500 ? " 100px" : "140px",
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
              {/* <div style={{ backgroundColor: "red" }}>
                <h3 style={{ backgroundColor: "red" }}>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div> */}
            </Slider>
          </div>
          {/* <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            originalWidth="100%"
            items={images}
            additionalClass="image-Gallery-Additional"
            width="100%"
          /> */}
          {/* <Carousel
            data={Imagesdata}
            time={2000}
            width="100%"
            height="500px"
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="150px"
            style={{
              textAlign: "center",
            }}
          /> */}
        </PostImage>
        <ResortInfoWrapper>
          <RatingAndLocationWrapper>
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
                  alt="location"
                  style={{ height: "100%", width: "100%" }}
                  src={locationIcon}
                />
              </div>
              <LocationArea>81 Pennsylvania Avenue, USA</LocationArea>
              {/* <LocationArea>{location}</LocationArea> */}
            </LocationWrapper>
            <RatingWrapper>
              <RatingText>4.1</RatingText>

              {new Array(5).fill(0).map((item, index) => {
                return (
                  <img
                    alt="star"
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
          </RatingAndLocationWrapper>
          <TitleAndPriceWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Title>{title}</Title>
              <img
                alt="verified"
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
          <div>
            <p
              style={{
                color: "#ED702D",
                fontSize: "18px",
                // fontWeight: "bold",
                margin: "0px",
              }}
            >
              1.4k Reviews
            </p>
          </div>
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
        <Title st>Details</Title>
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
      <Amenities amenities={amenities} />
      <Location location={data[0]} />

      <Pricing
        setCheckInDate={setCheckInDate}
        setCheckOutDate={setCheckOutDate}
      ></Pricing>
      <div style={{ backgroundColor: "" }}>
        <p
          style={{
            margin: "0px",
            marginBottom: "10px",
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          You can Add Additional Services
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
              label={item.currency + "  " + item.price + "  " + item.name}
              sx={{
                paddingLeft: "5px",
                marginBottom: "10px",
                marginRight: "10px",
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextButton
          onClick={() => {
            history.push(Resource_Section_Selection, {
              checkInDate,
              checkOutDate,
            });
            // console.log("CheckInDate", checkInDate);
            // console.log("CheckOutDate", checkOutDate);
          }}
        >
          <p style={{ margin: "0px" }}>Next</p>
          <div style={{ height: "30px", width: "30px" }}>
            <img
              alt=""
              style={{ width: "100%", height: "100%" }}
              src={nextArrow}
            ></img>
          </div>
        </NextButton>
      </div>

      <AddsPlaceholder></AddsPlaceholder>

      <ReviewsAndRatings></ReviewsAndRatings>
    </SinglePageWrapper>
  );
};

export default SinglePage;
