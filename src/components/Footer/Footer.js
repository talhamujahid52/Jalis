import React from "react";
import PropTypes from "prop-types";
import FooterWrapper, {
  MenuWrapper,
  CopyrightArea,
  SecondaryFooter,
} from "./Footer.style";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import VisaMcIcon from "../../assets/visaMC-icon.svg";
import madaIcon from "../../assets/mada-icon.svg";
import googlePay from "../../assets/GPay-icon.svg";
import ApplePay from "../../assets/applePay-icon.svg";
import stcPay from "../../assets/stcPay-icon.svg";
import maroof from "../../assets/maroof-jalis-icon.svg";

const Footer = ({ logo, menu, bgSrc, copyright, className, path }) => {
  return (
    <>
      <FooterWrapper id="footer" className={className} bg-img={bgSrc}>
        {logo && logo}
        {
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              <div style={{ height: "35px", width: "35px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={facebookIcon}
                />
              </div>
              <div style={{ height: "35px", width: "35px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={instagramIcon}
                />
              </div>
              <div style={{ height: "35px", width: "35px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={twitterIcon}
                />
              </div>
            </div>
            <p
              style={{
                margin: "0px",
                fontSize: "26px",
                fontWeight: "bold",
                color: "#707070",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Certifications and supported payment methods
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              <div style={{ height: "60px", width: "100px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={VisaMcIcon}
                />
              </div>
              <div style={{ height: "60px", width: "100px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={madaIcon}
                />
              </div>
              <div style={{ height: "60px", width: "100px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={googlePay}
                />
              </div>
              <div style={{ height: "60px", width: "100px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={ApplePay}
                />
              </div>
              <div style={{ height: "60px", width: "100px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={stcPay}
                />
              </div>
              <div style={{ height: "60px", width: "100px" }}>
                <img
                  alt=""
                  style={{ color: "#707070", height: "100%", width: "100%" }}
                  src={maroof}
                />
              </div>
            </div>
          </>
        }
        {menu && <MenuWrapper>{menu}</MenuWrapper>}
        {copyright && <CopyrightArea>{copyright}</CopyrightArea>}
      </FooterWrapper>
      {!!path && <SecondaryFooter />}
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element,
  menu: PropTypes.element,
  bgSrc: PropTypes.string,
  copyright: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Footer;
