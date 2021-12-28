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
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

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
  const [disableBtn, setDisableBtn] = useState(true);

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

  //create Events
  const createEvent = async () => {
    await addDoc(eventsCollectionRef, { ...formData, count: 0 });
  };

  //delete Event
  const deleteEvent = async (id) => {
    const eventDocDelete = doc(db, "potluck", id);
    await deleteDoc(eventDocDelete);
  };

  //update Event
  const updateEvent = async (id, event) => {
    setFormData(event);
    const eventDoc = doc(db, "potluck", id);
    const eventUpdate = { ...formData };
    await updateDoc(eventDoc, eventUpdate);
  };

  //handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    //disable submit button
    if (e.target.value !== "") {
      setDisableBtn(false);
    }

    //get form data
    setFormData({
      ...formData,
      [name]: value,
    });
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

  //increase likes
  const increaseLikes = async (id, event) => {
    const eventDoc = doc(db, "potluck", id);
    const updateCount = { ...event, count: event.count + 1 };
    await updateDoc(eventDoc, updateCount);
  };

  return (
    <>
      <section className="app__section">
        <Link to="/">
          <button className="homeBtn">Go home</button>
        </Link>

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
                {disableBtn ? (
                  ""
                ) : (
                  <input
                    className="formSubmit"
                    type="submit"
                    onClick={handleFormSubmit}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
        <main className="events__container">
          <h1 className="event__caption">One Meal, Many Participants</h1>
          <EventCard
            events={events}
            deleteEvent={deleteEvent}
            updateEvent={updateEvent}
            increaseLikes={increaseLikes}
          />
        </main>
      </section>
    </>
  );
}

export default MainApp;
