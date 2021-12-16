import React, { useState } from "react";
import MultiSteps from "./Form/MultiSteps";
import "./MainApp.css";
import "../../css/hover.css";

function MainApp() {
  const [formData, setFormData] = useState([
    {
      name: "",
      location: "",
      date: "",
      comment: "",
      mainDish: "",
      sideDish: "",
      dessert: "",
      beverage: "",
    },
  ]);

  //handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  //handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData, formData.length);
  };
  return (
    <>
      <section className="app__section">
        <div className="app__container">
          <img
            src="images/app_layer.png"
            alt="appLayer"
            className="app__bckgrndImg hvr-bob"
          />

          <div className="app__caption">
            <div className="stepsWrapper">
              <MultiSteps
                formData={formData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainApp;
