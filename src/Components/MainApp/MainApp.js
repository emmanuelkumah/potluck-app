import React, { useState } from "react";
import MultiSteps from "./Form/MultiSteps";
import "./MainApp.css";
import "../../css/hover.css";
import EventCard from "./EventCard";

function MainApp() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "Randy Birthday",
    location: "Accra ",
    date: "11/12/2021",
    comment: "Let all be available",
    mainDish: "Fufu and light soup",
    sideDish: "Kelewele",
    dessert: "Ice cream",
    beverage: "Orange juice",
  });

  //handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addEvent = () => {
    setEvents([...events, formData]);
  };

  //handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addEvent();
    //reset form
    setFormData({
      name: "",
      location: "",
      date: "",
      comment: "",
      mainDish: "",
      sideDish: "",
      dessert: "",
      beverage: "",
    });
  };

  console.log(events);

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
              <form onSubmit={handleFormSubmit}>
                <MultiSteps
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <input type="submit" onClick={handleFormSubmit} />
              </form>
            </div>
          </div>
        </div>
        <main className="events__container">
          <h1 className="event__caption">One Meal, Many Participants</h1>
          <EventCard events={events} />
        </main>
      </section>
    </>
  );
}

export default MainApp;
