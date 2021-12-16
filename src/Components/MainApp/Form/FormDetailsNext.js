import React from "react";

function FormDetailsNext() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="sideDish">Side Dish</label>
          <input type="text" id="sideDish" />
        </div>
        <div>
          <label htmlFor="mainCourse">Main Course</label>
          <input type="text" id="mainCourse" />
        </div>
        <div>
          <label htmlFor="beverages">Beverages</label>
          <input type="text" id="beverages" />
        </div>
        <div>
          <label htmlFor="dessert">Dessert</label>
          <input type="text" id="dessert" />
        </div>
      </form>
    </div>
  );
}

export default FormDetailsNext;
