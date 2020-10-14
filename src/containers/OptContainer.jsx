import React from "react";
import OptForm from "../components/optForm/optForm";

const OptContainer = () => {
  return (
    <OptForm>
      <OptForm.Input placeholder={"email enter"} />
      <OptForm.Button>Let`s try</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </OptForm.Text>
    </OptForm>
  );
};

export default OptContainer;
