import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import StepperComponent from "../../components/Stepper";
import InstanceLocationStep from "./steps/InstanceLocationStep";
import InstanceTypeStep from "./steps/InstanceTypeStep";
import { useSelector } from "react-redux";

const steps = [
  { title: "Instance Location", component: <InstanceLocationStep /> },
  { title: "Instance Type", component: <InstanceTypeStep /> },
];

const InstancesPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    navigate("/instances");
  }, [navigate]);

  return (
    <DashboardLayout>
      <Box
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <StepperComponent
          steps={steps}
          activeStep={activeStep}
          setActiveStep={(step) => {
            setActiveStep(step);
          }}
        />
      </Box>
    </DashboardLayout>
  );
};

export default InstancesPage;
