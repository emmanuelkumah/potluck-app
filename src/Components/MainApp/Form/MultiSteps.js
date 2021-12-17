import React from "react";
import StepZilla from "react-stepzilla";
import EventTitle from "./EventTitle";
import EventDetails from "./EventDetails";
import EventDish from "./EventDish";

function MultiSteps({ formData, handleInputChange }) {
  const steps = [
    {
      name: "Caption",
      component: <EventTitle />,
    },
    {
      name: "Detials",
      component: (
        <EventDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ),
    },
    {
      name: "Dish",
      component: (
        <EventDish formData={formData} handleInputChange={handleInputChange} />
      ),
    },
  ];

  return (
    <div className="step-progress">
      <StepZilla steps={steps} />
    </div>
  );
}

export default MultiSteps;
