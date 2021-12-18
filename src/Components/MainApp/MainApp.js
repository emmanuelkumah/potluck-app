import React, { useEffect, useState } from "react";
import MultiSteps from "./Form/MultiSteps";
import "../../css/MainApp.css";
import "../../css/hover.css";
import EventCard from "./EventCard";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

function MainApp() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    comment: "",
    mainDish: "",
    sideDish: "",
    dessert: "",
    beverage: "",
  });

  //Firebase connection

  //access the collection
  const eventsCollectionRef = collection(db, "potluck");
  useEffect(() => {
    //create event function
    const getEvents = async () => {
      //access the data
      const data = await getDocs(eventsCollectionRef);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, []);

  //handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //create Events
  const createEvent = async () => {
    await addDoc(eventsCollectionRef, { ...formData });
  };

  //delete Event
  const deleteEvent = async (id) => {
    const eventDocDelete = doc(db, "potluck", id);
    await deleteDoc(eventDocDelete);
  };
  //handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //add event
    createEvent();

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
                <input
                  className="formSubmit"
                  type="submit"
                  onClick={handleFormSubmit}
                />
              </form>
            </div>
          </div>
        </div>
        <main className="events__container">
          <h1 className="event__caption">One Meal, Many Participants</h1>
          <EventCard events={events} deleteEvent={deleteEvent} />
        </main>
      </section>
    </>
  );
}

export default MainApp;
