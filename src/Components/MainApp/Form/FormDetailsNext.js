import React from "react";

function FormDetailsNext() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="sideDish">Side Dish</label>
          <input type="text" id="sideDish" className="input" />
        </div>
        <div>
          <label htmlFor="mainCourse">Main Dish</label>
          <input type="text" id="mainCourse" className="input" />
        </div>
        <div>
          <label htmlFor="beverages">Beverages</label>
          <input type="text" id="beverages" className="input" />
        </div>
        <div>
          <label htmlFor="dessert">Dessert</label>
          <input type="text" id="dessert" className="input" />
        </div>
      </form>
    </div>
  );
}

export default FormDetailsNext;
