import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const StepperComponent = (props) => {
  const { steps, activeStep, setActiveStep } = props;
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    if (!isLastStep()) {
      setActiveStep((prevStep) => prevStep + 1);
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stepper style={{ width: "500px" }} nonLinear activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={step.title} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {step.title}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </div>

      <div>
        (
        <React.Fragment>
          <Typography variant="h3" sx={{ mt: 2, mb: 1, py: 1 }}>
            {steps[activeStep].title}
          </Typography>

          <Box style={{ marginTop: "30px" }}>{steps[activeStep].component}</Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button disabled={isLastStep()} onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
          </Box>
        </React.Fragment>
      </div>
    </Box>
  );
};

export default StepperComponent;
