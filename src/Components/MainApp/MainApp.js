import React from "react";
import MultiSteps from "./Form/MultiSteps";
import "./MainApp.css";

function MainApp() {
  return (
    <>
      <section className="app__section">
        <div className="app__container">
          <div className="app__caption">
            <div className="stepsWrapper">
              <MultiSteps />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainApp;
