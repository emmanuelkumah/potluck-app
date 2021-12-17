import React from "react";

function EventDish({ formData, handleInputChange }) {
  return (
    <div>
      <div>
        <label htmlFor="sideDish">Side Dish</label>
        <input
          className="input"
          type="text"
          id="sideDish"
          name="sideDish"
          value={formData.sideDish}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="mainCourse">Main Dish</label>
        <input
          className="input"
          type="text"
          id="mainCourse"
          name="mainDish"
          value={formData.mainDish}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="beverages">Beverages</label>
        <input
          className="input"
          type="text"
          id="beverages"
          value={formData.beverage}
          name="beverage"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="dessert">Dessert</label>
        <input
          className="input"
          type="text"
          id="dessert"
          value={formData.dessert}
          name="dessert"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="notes"></label>
        <textarea
          rows="5"
          col="10"
          placeholder="Any other comment"
          id="notes"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default EventDish;
