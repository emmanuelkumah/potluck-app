import React from "react";
import StepZilla from "react-stepzilla";
import FormCaption from "./FormCaption";
import FormDetails from "./FormDetails";
import FormDetailsNext from "./FormDetailsNext";

const steps = [
  { name: "Caption", component: <FormCaption /> },
  { name: "Detials", component: <FormDetails /> },
  { name: "Lists", component: <FormDetailsNext /> },
];
function MultiSteps() {
  return (
    <div className="step-progress">
      <StepZilla steps={steps} />
    </div>
  );
}

export default MultiSteps;
