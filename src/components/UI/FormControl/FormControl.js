import React from "react";
import PropTypes from "prop-types";
import HtmlLabel from "../HtmlLabel/HtmlLabel";
import Wrapper, { IconandLabelWrapper } from "./FormControl.style";

const FormControl = ({
  leftIcon,
  className,
  label,
  labelTag,
  htmlFor,
  children,
  error,
}) => {
  const addAllClasses = ["form-control"];
  if (error) {
    addAllClasses.push("has-error");
  }
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Wrapper style={{ width: "" }} className={addAllClasses.join(" ")}>
      <IconandLabelWrapper>
        {
          <img
            alt=""
            style={{
              marginRight: "5px",
            }}
            src={leftIcon}
          ></img>
        }
        {label && (
          <HtmlLabel
            className="field-label"
            as={labelTag}
            htmlFor={htmlFor}
            content={label}
          />
        )}
      </IconandLabelWrapper>
      {children}
      {error && <div className="feedback">{error}</div>}
    </Wrapper>
  );
};

FormControl.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelTag: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.any,
};

export default FormControl;
