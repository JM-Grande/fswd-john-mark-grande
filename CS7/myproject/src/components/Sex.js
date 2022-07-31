import React, { useState, useEffect } from "react";

const Sex = (props) => {
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");

  const validateSex = () => {
    if (male === "Male" || female === "Female") {
      props.setSexValid(true);
    } else {
      props.setSexValid(false);
    }
  };

  useEffect(validateSex, [male, female, props]);

  return (
    <>
      <h5>Sex:</h5>
      <span>Male</span>
      <input
        type="radio"
        className="sex_male"
        name="sex"
        value={"Male"}
        onChange={(event) => setMale(String(event.target.value))}
      />
      <span>Female</span>
      <input
        type="radio"
        className="sex_male"
        name="sex"
        value={"Female"}
        onChange={(event) => setFemale(String(event.target.value))}
      />
    </>
  );
};

export default Sex;
