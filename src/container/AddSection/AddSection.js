import GeneralSection from "../../components/AddSection/GeneralSection/GeneralSection";
import PricingSection from "../../components/AddSection/PricingSection/PricingSection";
import ImagesSection from "../../components/AddSection/ImagesSection/ImagesSection";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { MANAGE_SECTION_PAGE, TAB_Navigation } from "settings/constant";
import { StepperButton } from "./AddSection.style";
import {
  useForm,
  useFormContext,
  Controller,
  FormProvider,
} from "react-hook-form";
const steps = ["", "", ""];

export default function HorizontalLinearStepper() {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const methods = useForm();

  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const onFinishClick = () => {
    history.push(TAB_Navigation);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const onDataSubmit = (data) => {
    console.log(data);
  };

  const components = [
    <GeneralSection handleNext={handleNext} handleBack={handleBack} />,
    <PricingSection handleNext={handleNext} handleBack={handleBack} />,
    <ImagesSection handleNext={onFinishClick} handleBack={handleBack} />,
  ];

  return (
    <Box sx={{ width: "100%", padding: "40px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {components[activeStep]}
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                // onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <StepperButton
                type="submit"
                // onClick={
                //   activeStep === steps.length - 1 ? onFinishClick : handleNext
                // }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </StepperButton>
            </Box> */}
          </Typography>
        </React.Fragment>
      }
    </Box>
  );
}
