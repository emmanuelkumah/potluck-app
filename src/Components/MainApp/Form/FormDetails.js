import React from "react";
import "./Form.css";

function FormDetails() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="eventName">Name</label>
          <input
            type="text"
            placeholder="Please enter the event name"
            id="eventName"
            aria-describedby="eventName"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="eventLocation">Location</label>
          <input
            type="text"
            placeholder="Please enter the event location"
            id="eventLocation"
            aria-describedby="location"
            className="input"
          />
        </div>

        <div className="eventDate">
          <label htmlFor="datetime">When:</label>
          <input type="datetime-local" name="datetime" id="datetime" />
        </div>
        <div>
          <label htmlFor="notes"></label>
          <textarea
            rows="10"
            col="20"
            placeholder="Any other comment"
            id="notes"
          />
        </div>
      </form>
    </div>
  );
}

export default FormDetails;
