// Can be removed, only purpose is to show redirect working

import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton=() => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <div>
      <button className="testButton" type="button" onClick={handleClick}>
      Landing
      </button>
      <small>Button trys to take user to '/'</small>
    </div>
  );
}

export default HomeButton;
