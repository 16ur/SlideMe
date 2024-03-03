import React from "react";
import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const CustomDropdown = ({
  handleGoToFirstSlide,
  handleGoToLastSlide,
  total,
}) => {
  return (
    <DropdownButton title="Menu">
      <Dropdown.Item onClick={handleGoToFirstSlide}>Début</Dropdown.Item>
      <Dropdown.Item onClick={handleGoToLastSlide}>Fin</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item disabled>Choisir une diapositive :</Dropdown.Item>
      {Array.from({ length: total }, (_, i) => (
        <Dropdown.Item key={i + 1} onClick={() => handleGoToSlide(i + 1)}>
          Diapositive {i + 1}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default CustomDropdown;
