import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { MdEmail } from "react-icons/md";
import { Input, Button } from "antd";
// import { Radio } from "antd";
// import Logo from "components/UI/Logo/Logo";
import FormControl from "components/UI/FormControl/FormControl";
import Wrapper, {
  Title,
  // TitleInfo,
  FormWrapper,
  BannerWrapper,
  ToChangePassword,
} from "./Auth.style";

export default function ForgetPassWord() {
  const { control, errors, handleSubmit } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <FormWrapper>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Logo
            withLink
            linkTo="/"
            // src="/images/logo-alt.svg"
            src="/images/jalis-logo.svg"
            // title="TripFinder."
          />
        </div> */}
        <Title>Enter New Password</Title>
        <ToChangePassword>
          To change Password enter New Password below
        </ToChangePassword>
        {/* <p>To change Password enter New Password below</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            label="Password"
            htmlFor="password"
            error={
              errors.password && (
                <>
                  {errors.password?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span>Password must be at lest 6 characters!</span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span>Password must not be longer than 20 characters!</span>
                  )}
                </>
              )
            }
          >
            <Controller
              as={<Input.Password />}
              defaultValue=""
              control={control}
              id="password"
              name="password"
              rules={{ required: true, minLength: 6, maxLength: 20 }}
            />
          </FormControl>
          <Button
            className="signin-btn"
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%" }}
          >
            {/* <MdEmail /> */}
            Save
          </Button>
        </form>
      </FormWrapper>
      <BannerWrapper>
        <img src="/images/Announcment.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
}
