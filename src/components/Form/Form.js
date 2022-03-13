import React from "react";

import "./Form.css";

const Form = ({ changePage }) => {
  const checkEmptyText = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (!element.value) {
      alert("please fill in the " + id + "!");
      return false;
    } else {
      return true;
    }
  };

  function checkEmail() {
    const email = document.getElementById("email");
    if (!checkEmptyText("email")) return false;
    else {
      const filter =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!filter.test(email.value)) {
        alert("Please provide a valid email address");
        return false;
      } else {
        return true;
      }
    }
  }

  // check all required inputs
  const validate = () => {
    let error = null;
    if (!checkEmptyText("name")) error++;
    if (!checkEmail()) error++;
    if (error === null) return true;
  };

  const cancel = (e) => {
    if (window.confirm("are you sure to cancel the form?")) {
      changePage("homepage");
    } else e.preventDefault();
  };

  const send = (e) => {
    if (validate()) {
      window.confirm("Thanks for your contact, we will get to you ASAP!");
      changePage("homepage");
    } else e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Contact Form</h1>
      <form action="/formprocess.php" method="post">
        <legend className="itemsContainer">
          <div id="inputName" className="item">
            <label className="required">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div id="inputEmail" className="item">
            <label className="required">E-mail</label>
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div id="inputPeople" className="item">
            <label>Amount of people</label>
            <input type="number" name="people" step="1" min="1" max="100" />
          </div>
          <div id="inputAge" className="item">
            <label>Age</label>
            <div className="multi">
              <div className="markContainer">
                <label className="radios">&#60; 30</label>
                <input type="radio" name="age" value="<30" />
                <span className="radiomark"></span>
              </div>
              <div className="markContainer">
                <label className="radios">30 - 50</label>
                <input type="radio" name="age" value="30-50" />
                <span className="radiomark"></span>
              </div>
              <div className="markContainer">
                <label className="radios">&#62; 50</label>
                <input type="radio" name="age" value=">50" />
                <span className="radiomark"></span>
              </div>
            </div>
          </div>
          <div id="inputDate" className="item">
            <label>Arriving time</label>
            <input type="date" name="date" />
          </div>
          <div id="inputDays" className="item">
            <label>Number of days</label>
            <input type="number" name="days" step="1" min="1" max="999" />
          </div>
          <div id="interests" className="item">
            <label>You're interested in</label>
            <div className="multi">
              <div className="markContainer">
                <label className="checks">Culture</label>
                <input type="checkbox" name="interests" value="culture" />
                <span className="checkmark"></span>
              </div>
              <div className="markContainer">
                <label className="checks">Nature</label>
                <input type="checkbox" name="interests" value="nature" />
                <span className="checkmark"></span>
              </div>
              <div className="markContainer">
                <label className="checks">Life</label>
                <input type="checkbox" name="interests" value="life" />
                <span className="checkmark"></span>
              </div>
              <div className="markContainer">
                <label className="checks">Events</label>
                <input type="checkbox" name="interests" value="event" />
                <span className="checkmark"></span>
              </div>
            </div>
          </div>
          <div id="inputeWish" className="item">
            <label>Any wishes</label>
            <textarea
              rows="5"
              name="wish"
              maxLength="5000"
              placeholder="5000 words...."
            ></textarea>
          </div>
        </legend>
        <input
          type="button"
          id="cancel"
          value="Cancel"
          onClick={(e) => cancel(e)}
        />
        <input
          type="button"
          id="sumit"
          value="Sumit"
          onClick={(e) => send(e)}
        />
      </form>
    </div>
  );
};

export default Form;
