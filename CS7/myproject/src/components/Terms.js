import React from "react";

const Terms = (props) => {
  const validateTerms = (terms) => {
    if (terms) {
      props.setTermsValid(true);
    } else {
      props.setTermsValid(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value={true}
        onChange={(event) => {
          validateTerms(event.target.value);
        }}
      />
      <span>I AGREE TO THE TERMS AND CONDITIONS</span>
    </div>
  );
};

export default Terms;
