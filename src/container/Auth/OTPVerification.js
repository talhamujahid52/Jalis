import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { Input, Button } from "antd";
import { Modal } from "antd";
import { Radio } from "antd";
import Logo from "components/UI/Logo/Logo";
import FormControl from "components/UI/FormControl/FormControl";
import { useHistory } from "react-router-dom";
import { ENTER_NEW_PASSWORD, HOME_PAGE } from "settings/constant";

import Wrapper, {
  Title,
  TitleInfo,
  FormWrapper,
  BannerWrapper,
  ToChangePassword,
} from "./Auth.style";

export default function OTPVerification() {
  const history = useHistory();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <Wrapper>
      <Modal
        title="Confirmation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Password reset email has been sent successfully. Please check the
          Junk/SPAM folder if you don't see the email in your Inbox within the
          next 5 minutes
        </p>
      </Modal>
      <FormWrapper>
        <Title>Verification</Title>
        <ToChangePassword>
          Enter 6 digit verification code you recieved on your phone number
        </ToChangePassword>
        {/* <strong style={{ margin: "0px", marginBottom: "45px" }}>
          +966 5512345678
        </strong> */}
        <p
          style={{
            margin: "0px",
            marginBottom: "45px",
            fontWeight: "bolder",
            fontSize: "26px",
            textAlign: "center",
          }}
        >
          +966 5512345678
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          {otp.map((data, index) => {
            return (
              <input
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#F6F6F6",
                  border: "0px",
                }}
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>

        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: "100%" }}
          onClick={() => {
            history.push(HOME_PAGE);
          }}
        >
          verify
        </Button>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          <span>
            <strong>
              <u>Resend code</u>
            </strong>
          </span>
          {"  "}
          with in 30 seconds
        </p>
      </FormWrapper>
      <BannerWrapper>
        <img src="/images/Announcment.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
}
