import React from "react";
import "./Form.css";

function EventDetails({ formData, handleInputChange }) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="eventName">Name</label>
          <input
            className="input"
            type="text"
            placeholder="Please enter the event name"
            id="eventName"
            aria-describedby="eventName"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="eventLocation">Location</label>
          <input
            className="input"
            type="text"
            name="location"
            placeholder="Please enter the event location"
            id="eventLocation"
            aria-describedby="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="eventDate">
          <label htmlFor="datetime">When:</label>
          <input
            type="datetime-local"
            name="date"
            id="datetime"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="notes"></label>
          <textarea
            rows="10"
            col="20"
            placeholder="Any other comment"
            id="notes"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default EventDetails;
