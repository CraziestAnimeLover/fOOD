import React from "react";
import "./style.css";

const Buy = () => {
  return (
    <div className="containerswithcontainer">
      <div className="containerswithcontainer">
        <h1>Payment Method</h1>
        <form>
          <label for="country">
            Country
            <select ClassName="country" id="country">
              <option value="germany">germany</option>
              <option value="england">england</option>
              <option value="india">india</option>
            </select>
          </label>
          <label for="cardno">
            Card Number
            <input
              type="text"
              ClassName="cardno"
              id="cardno"
              maxlength="19"
              onkeypress="cardspace()"
            />
          </label>
          <div className="float">
            <label for="validtill">
              Valid till
              <input
                type="text"
                ClassName="validtill"
                id="validtill"
                maxlength="7"
                onkeypress="addSlashes()"
              />
            </label>
            <label for="cvv">
              Cvv
              <input type="text" ClassName="cvv" id="cvv" maxlength="3" />
            </label>
          </div>
          <label for="checkbox">
            <input type="checkbox" ClassName="checkbox" id="checkbox" />
            <p>Payment Address is the same as the Delivery Address</p>
          </label>
          <button>Pay 89.00 $</button>
        </form>
      </div>
    </div>
  );
};

export default Buy;
