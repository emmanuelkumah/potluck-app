import React from "react";
import Form from "./Form";
import "./MainApp.css";

function MainApp() {
  return (
    <>
      <section className="app__section">
        <div className="app__container">
          <div className="app__caption">
            <h1>Event Details ?</h1>
            <p>Let's help you organize the next meal train</p>
          </div>

          <Form />
        </div>
      </section>
    </>
  );
}

export default MainApp;
