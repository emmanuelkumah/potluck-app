import React from "react";

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
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="eventLocation">Location</label>
          <input
            type="text"
            placeholder="Please enter the event location"
            id="eventLocation"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="eventLocation">Location</label>
          <input
            type="text"
            placeholder="Please enter the event location"
            id="eventLocation"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="datetime">Event (date and time):</label>

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
