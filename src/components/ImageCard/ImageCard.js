import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { themeGet } from "@styled-system/theme-get";

import ImageCardWrapper, {
  TextAndButtonWrapper,
  ContentWrapper,
  Title,
  Meta,
} from "./ImageCard.style";

const ImageCard = ({ className, imageSrc, title, link, meta }) => {
  // Add all classs to an array
  const addAllClasses = ["image_card"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    // <ImageCardWrapper className={addAllClasses.join(" ")}>
    <ImageCardWrapper>
      <Link to={link}>
        <img src={imageSrc} alt={title} />
        <ContentWrapper>
          <TextAndButtonWrapper>
            <div>
              {/* {title && <Title>{title}</Title>}
              {meta && <Meta>{meta}</Meta>} */}
              {title && <Title>Resort food 20% off.</Title>}
              {meta && <Meta>Announcements</Meta>}
            </div>
            <Button className="read-more-Button-wrapper">Read more</Button>
          </TextAndButtonWrapper>
        </ContentWrapper>
      </Link>
    </ImageCardWrapper>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  meta: PropTypes.string,
};

ImageCard.defaultProps = {
  link: "#",
};

export default ImageCard;
