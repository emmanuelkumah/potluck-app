import React from "react";
import "../../../css/Form.css";

function EventDetails({ formData, handleInputChange }) {
  return (
    <div>
      <div>
        <label htmlFor="eventName">Name </label>
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
        <label htmlFor="datetime">
          When:
          <input
            type="datetime-local"
            name="date"
            id="datetime"
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
}

export default EventDetails;
