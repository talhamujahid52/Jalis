import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { MdEmail } from "react-icons/md";
import { Input, Button } from "antd";
import { Radio } from "antd";
// import Logo from "components/UI/Logo/Logo";
import FormControl from "components/UI/FormControl/FormControl";
import { useHistory } from "react-router-dom";
import { ENTER_NEW_PASSWORD } from "settings/constant";

import Wrapper, {
  Title,
  TitleInfo,
  FormWrapper,
  BannerWrapper,
} from "./Auth.style";
// import { set } from "lodash";

export default function ForgetPassWord() {
  const history = useHistory();
  const [value, setValue] = React.useState(1);
  // const [emailRequired, setEmailRequired] = React.useState(false);
  const [input1, setInput1] = React.useState(false);
  const [input2, setInput2] = React.useState(true);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    if (e.target.value === 1) {
      console.log("This is first  radio");
      setInput2(true);
      setInput1(false);
    } else if (e.target.value === 2) {
      console.log("This is 2nd radio");
      setInput1(true);
      setInput2(false);
    }
  };

  const { control, errors, handleSubmit } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(value);
    console.log(data);
    if (value === 2) {
      history.push(ENTER_NEW_PASSWORD);
    }
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
        <Title>Reset Your Password</Title>
        <TitleInfo>Select a method to reset your Password</TitleInfo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Radio.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // border: "1px solid red",
            }}
            onChange={onChange}
            value={value}
          >
            <Radio value={1}>
              <FormControl
                label="Email"
                htmlFor="email"
                error={
                  errors.email && (
                    <>
                      {errors.email?.type === "required" && (
                        <span>This field is required!</span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span>Please enter a valid email address!</span>
                      )}
                    </>
                  )
                }
              >
                <Controller
                  as={<Input />}
                  type="email"
                  id="email"
                  name="email"
                  defaultValue=""
                  disabled={input1}
                  control={control}
                  rules={{
                    required: false,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  }}
                />
              </FormControl>
            </Radio>
            <Radio value={2}>
              <FormControl
                label="Phone number"
                htmlFor="phonenumber"
                error={
                  errors.phonenumber && (
                    <>
                      {errors.phonenumber?.type === "required" && (
                        <span>This field is required!</span>
                      )}
                      {errors.phonenumber?.type === "pattern" && (
                        <span>Please enter a valid email address!</span>
                      )}
                    </>
                  )
                }
              >
                <Controller
                  as={<Input />}
                  type="phonenumber"
                  id="phonenumber"
                  name="phonenumber"
                  defaultValue=""
                  disabled={input2}
                  control={control}
                  rules={
                    {
                      // required: true,
                      // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    }
                  }
                />
              </FormControl>
            </Radio>
            {/* <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio> */}
          </Radio.Group>
          {/* <FormControl
            label="Email"
            htmlFor="email"
            error={
              errors.email && (
                <>
                  {errors.email?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span>Please enter a valid email address!</span>
                  )}
                </>
              )
            }
          >
            <Controller
              as={<Input />}
              type="email"
              id="email"
              name="email"
              defaultValue=""
              control={control}
              rules={{
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              }}
            />
          </FormControl> */}
          <Button
            className="signin-btn"
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%" }}
          >
            {/* <MdEmail /> */}
            Reset Password
          </Button>
        </form>
      </FormWrapper>
      <BannerWrapper>
        {/* <img src="/images/login-page-bg.jpg" alt="Auth page banner" /> */}
        <img src="/images/Announcment.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
}
