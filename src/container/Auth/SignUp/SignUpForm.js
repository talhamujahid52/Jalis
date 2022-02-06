import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { MdLockOpen } from "react-icons/md";
import { Input, Button } from "antd";
import FormControl from "components/UI/FormControl/FormControl";
// import { Link } from "react-router-dom";
import { OTP_VERIFICATION } from "settings/constant";
import { useHistory } from "react-router-dom";
// import emailIcon from "../../../../public/images/EmailIcon.svg";
// import PasswordIcon from "../../../../public/images/PasswordIcon.svg";
// import PhoneIcon from "../../../../public/images/PhoneIcon.svg";

import { AuthContext } from "context/AuthProvider";
import {
  // FieldWrapper,
  // SwitchWrapper,
  // Label,
  RoleButtonWrapper,
  RoleButton,
  BankDetails,
} from "../Auth.style";

const SignUpForm = () => {
  const history = useHistory();
  const [role, setRole] = useState("");
  const { loggedIn } = useContext(AuthContext);
  const { control, watch, errors, handleSubmit } = useForm({
    mode: "onChange",
  });
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const onSubmit = (data) => {
    history.push(OTP_VERIFICATION);
    // <Link to={OTP_VERIFICATION} />;
    // signUp(data);
  };
  if (loggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
    // return <Redirect to={{ pathname: OTP_VERIFICATION }} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormControl
        label="Username"
        htmlFor="username"
        error={
          errors.username && (
            <>
              {errors.username?.type === "required" && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="username"
          name="username"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl> */}
      <FormControl
        leftIcon="/images/EmailIcon.svg"
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
      </FormControl>
      <FormControl
        leftIcon="/images/PhoneIcon.svg"
        label="Phone number"
        htmlFor="phone"
        error={
          errors.phone && (
            <>
              {errors.phone?.type === "required" && (
                <span>This field is required!</span>
              )}
              {errors.phone?.type === "pattern" && (
                <span>Please enter a valid phone number!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          type="phone"
          id="phone"
          name="phone"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
        />
      </FormControl>
      <FormControl
        leftIcon="/images/PasswordIcon.svg"
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
      <FormControl
        leftIcon="/images/PasswordIcon.svg"
        label="Confirm password"
        htmlFor="confirmPassword"
        error={
          confirmPassword &&
          password !== confirmPassword && (
            <span>Your password is not same!</span>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="confirmPassword"
          name="confirmPassword"
        />
      </FormControl>
      <p
        style={{
          fontSize: "15px",
          lineHeight: "18px",
          fontWeight: "600",
          display: "block",
          marginBottom: "15px",
        }}
      >
        Role
      </p>
      <RoleButtonWrapper>
        <RoleButton
          type="button"
          onClick={() => {
            setRole("Customer");
          }}
        >
          Customer
        </RoleButton>
        <RoleButton
          type="button"
          onClick={() => {
            setRole("ResortOwner");
          }}
        >
          Resort Owner
        </RoleButton>
        <RoleButton
          type="button"
          onClick={() => {
            setRole("ServiceProvider");
          }}
        >
          Service Provider
        </RoleButton>
      </RoleButtonWrapper>
      {role === "ResortOwner" && (
        <BankDetails>
          <FormControl
            label="Bank Name"
            htmlFor="bankname"
            error={
              errors.bankname && (
                <>
                  {errors.username?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                </>
              )
            }
          >
            <Controller
              as={<Input />}
              id="bankname"
              name="bankname"
              defaultValue=""
              control={control}
              rules={{
                required: true,
              }}
            />
          </FormControl>
          <FormControl
            label="Bank Account Number"
            htmlFor="bankaccountnumber"
            error={
              errors.bankaccountnumber && (
                <>
                  {errors.bankaccountnumber?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                </>
              )
            }
          >
            <Controller
              as={<Input />}
              id="bankaccountnumber"
              name="bankaccountnumber"
              defaultValue=""
              control={control}
              rules={{
                required: true,
              }}
            />
          </FormControl>
        </BankDetails>
      )}

      {/* <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="termsAndConditions"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>I agree with terms and conditions</Label>
        </SwitchWrapper>
      </FieldWrapper> */}
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: "100%" }}
      >
        <MdLockOpen />
        Register
      </Button>
    </form>
  );
};

export default SignUpForm;
