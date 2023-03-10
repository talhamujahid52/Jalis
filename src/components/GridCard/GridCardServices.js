import React from "react";
import PropTypes from "prop-types";
import Location from "../../assets/location-pin.svg";
import Verified from "../../assets/Verified.svg";
import starIcon from "../../assets/star.svg";
import ribbon from "../../assets/ribbon-orange.svg";
import GridCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  PriceArea,
  ArabicText,
  // RatingArea,
  // MetaWrapper,
  // ButtonGroup,
} from "./GridCard.style";

const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children,
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "0px",
          zIndex: "100",
          height: "30px",
          // width: "200px",
        }}
      >
        <img
          alt="ribbon"
          src={ribbon}
          style={{ height: "100%", width: "100%" }}
        />
        <p style={{ color: "white", marginTop: "-28px", marginLeft: "10px" }}>
          Special Offer: 40%
        </p>
      </div>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <ContentWrapper className="content_wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            {location && (
              <img
                alt="Location"
                style={{ height: "20px", width: "15px", marginRight: "5px" }}
                src={Location}
              />
            )}
            {/* {location && <LocationArea>{location}</LocationArea>} */}
            {location && (
              <LocationArea>81 Pennsylvania Avenue, USA</LocationArea>
            )}
            {/* {location && (
              <img
                style={{ height: "18px", width: "12px", marginLeft: "5px" }}
                src={Verified}
              />
            )} */}
          </div>
          <div style={{ display: "flex" }}>
            {rating && (
              <p
                style={{
                  fontSize: "16px",
                  color: "#FFBB00",
                  margin: "0px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                4.1
              </p>
            )}
            {rating &&
              new Array(5).fill(0).map((item, index) => {
                return (
                  <img
                    alt="starIcon"
                    key={index}
                    style={{ height: "20px", width: "15px", marginLeft: "2px" }}
                    src={starIcon}
                  />
                );
              })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
              // border: "1px solid red",
              width: "50%",
            }}
          >
            {title && <TitleArea>{title}</TitleArea>}
            {title && (
              <img
                alt="verified"
                style={{ height: "18px", width: "12px", marginLeft: "5px" }}
                src={Verified}
              />
            )}
          </div>
          {price && (
            <PriceArea className="price">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                start from
                <ArabicText>????????</ArabicText>
                <p style={{ color: "#ED702D" }}>1000</p>/
                <p style={{ textDecoration: "line-through" }}>2000</p>
              </div>
            </PriceArea>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #F5F4F4",
              borderRadius: "10px",
              width: "30%",
            }}
          >
            <p
              style={{
                margin: "0px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2D3447",
                marginRight: "10px",
              }}
            >
              Contact Us
            </p>
            {title && (
              <img
                alt="Verified"
                style={{ height: "18px", width: "12px", marginLeft: "5px" }}
                src={Verified}
              />
            )}
          </div> */}
          {/* {price && (
            <PriceArea className="price">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                start from
                <ArabicText>????????</ArabicText>
                <p style={{ color: "#ED702D" }}>1000</p>/
                <p style={{ textDecoration: "line-through" }}>2000</p>
              </div>
            </PriceArea>
          )} */}
        </div>
        {/* <div>
          <p style={{ color: "#ED702D", fontSize: "12px", fontWeight: "bold" }}>
            1.4k Reviews
          </p>
        </div> */}

        {/* <MetaWrapper className="meta_wrapper">
          {price && <PriceArea className="price">{price}</PriceArea>}
          {rating && <RatingArea className="rating">{rating}</RatingArea>}
          {viewDetailsBtn || editBtn ? (
            <ButtonGroup className="button_group">
              {viewDetailsBtn}
              {editBtn}
            </ButtonGroup>
          ) : null}
        </MetaWrapper> */}
      </ContentWrapper>

      {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
    </GridCardWrapper>
  );
};

GridCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  price: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  editBtn: PropTypes.element,
  viewDetailsBtn: PropTypes.element,
};

export default GridCard;
