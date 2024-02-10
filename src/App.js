import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?seed=abc")
      .then((response) => {
        const data = response.data.results[0];
        setImage(data.picture.large);
        setFirstName(data.name.first);
        setLastName(data.name.last);
        setGender(data.gender);
        setPhone(data.phone);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <img src={image} alt="User Image" className="image" />
        <div>
          <div className="name">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <p>{gender}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
