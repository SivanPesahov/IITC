import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function back() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <div>NotFound</div>
      <button onClick={back}>Back</button>
    </>
  );
}

export default NotFound;