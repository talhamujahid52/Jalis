import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import Logo from "components/UI/Logo/Logo";
import { REGISTRATION_PAGE } from "settings/constant";
import SignInForm from "./SignInForm";
// import SocialLogin from "../SocialLogin";
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from "../Auth.style";

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Logo
            withLink
            linkTo="/"
            // src="/images/logo-alt.svg"
            src="/images/jalis-logo.svg"

            // title="TripFinder."
          />
        </div>

        {/* <img style={{marginLeft:"100px"}} src="/images/jalis-logo.svg" /> */}
        <Title>Welcome Back</Title>
        <TitleInfo>Please log into your account</TitleInfo>
        <SignInForm />
        {/* <Divider>Or log in with </Divider> */}
        <Divider></Divider>

        {/* <SocialLogin /> */}
        <Text>
          Don't Have an Account?&nbsp;
          <Link to={REGISTRATION_PAGE}>Register</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        {/* <img src="/images/login-page-bg.jpg" alt="Auth page banner" /> */}
        <img src="/images/Announcment.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignIn;
