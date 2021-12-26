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
  startFromText,
} from "./SinglePageView.style";
import PostImageGallery from "./ImageGallery/ImageGallery";
import useDataApi from "library/hooks/useDataApi";
import isEmpty from "lodash/isEmpty";
import locationIcon from "../../assets/location-pin.svg";
import verifiedIcon from "../../assets/Verified.svg";
import starIcon from "../../assets/star.svg";
import Pricing from "./Pricing/Pricing";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
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

  return (
    <SinglePageWrapper>
      <ImageWrapper>
        <PostImage>
          <img
            className="absolute"
            src="/images/single-post-bg.jpg"
            alt="Listing details page banner"
          />
          <Button
            type="primary"
            onClick={() => setIsModalShowing(true)}
            className="image_gallery_button"
          >
            View Photos
          </Button>
          <Modal
            visible={isModalShowing}
            onCancel={() => setIsModalShowing(false)}
            footer={null}
            width="100%"
            maskStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
            wrapClassName="image_gallery_modal"
            closable={false}
          >
            <Fragment>
              <PostImageGallery />
              <Button
                onClick={() => setIsModalShowing(false)}
                className="image_gallery_close"
              >
                <svg width="16.004" height="16" viewBox="0 0 16.004 16">
                  <path
                    id="_ionicons_svg_ios-close_2_"
                    d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                    transform="translate(-160.5 -160.55)"
                    fill="#909090"
                  />
                </svg>
              </Button>
            </Fragment>
          </Modal>
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
                  style={{ height: "100%", width: "100%" }}
                  src={locationIcon}
                />
              </div>
              <LocationArea>81 Pennsylvania Avenue, USA</LocationArea>
              {/* <LocationArea>{location}</LocationArea> */}
            </LocationWrapper>
            <RatingWrapper>
              <RatingText>4.1</RatingText>

              {new Array(5).fill(0).map((item) => {
                return (
                  <img
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
                style={{ height: "24px", width: "18px", marginLeft: "5px" }}
                src={verifiedIcon}
              />
            </div>
            <PriceArea>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <startFromText>start from</startFromText> */}
                start from
                <ArabicText>ريال</ArabicText>
                <p style={{ color: "#ED702D", margin: "0px" }}>1000</p>/
                <p style={{ textDecoration: "line-through", margin: "0px" }}>
                  2000
                </p>
              </div>
            </PriceArea>
          </TitleAndPriceWrapper>
          <div>
            <p
              style={{ color: "#ED702D", fontSize: "24px", fontWeight: "bold" }}
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

      <Pricing></Pricing>
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
                backgroundColor: item.selected ? "#ED702D28" : "white",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: item.selected ? "#ED702D28" : "#E3E3E3",
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "10px",
          height: "200px",
          backgroundColor: "silver",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{ fontsize: "28px", color: "whitesmoke", fontWeight: "bold" }}
        >
          Adds placeholder
        </p>
      </div>
      <ReviewsAndRatings></ReviewsAndRatings>
      <button
        style={{
          height: "60px",
          width: "200px",
          backgroundColor: "orange",
          borderRadius: "10px",
        }}
        onClick={() => {
          history.push(Resource_Section_Selection);
        }}
      >
        Next
      </button>

      {/* <TopBar title={title} shareURL={href} author={author} media={gallery} /> */}

      {/* <Container>
        <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
          <Col xl={16}>
            <Description
              content={content}
              title={title}
              location={location}
              rating={rating}
              ratingCount={ratingCount}
            />
            <Amenities amenities={amenities} />
            <Location location={data[0]} />
          </Col>
          <Col xl={8}>
            {width > 1200 ? (
              <Sticky
                innerZ={999}
                activeClass="isSticky"
                top={202}
                bottomBoundary="#reviewSection"
              >
                <Reservation />
              </Sticky>
            ) : (
              <BottomReservation
                title={title}
                price={price}
                rating={rating}
                ratingCount={ratingCount}
              />
            )}
          </Col>
        </Row>
        <Row gutter={30}>
          <Col xl={16}>
            <Review
              reviews={reviews}
              ratingCount={ratingCount}
              rating={rating}
            />
          </Col>
          <Col xl={8} />
        </Row>
      </Container> */}
    </SinglePageWrapper>
  );
};

export default SinglePage;
