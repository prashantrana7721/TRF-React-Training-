import React, { useState } from "react";
import Card from '../UI/Card';
import "./TD.css";

const TDTeamSection = () => {
  const [assignedTo, setAssignedTo] = useState("");
  const [remark, setRemark] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <Card>
      <h1>T&D Team Section</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="assignedTo">Assigned To : </label>
          <input
            type="text"
            id="assignedTo"
            value={assignedTo}
            onChange={(event) => setAssignedTo(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="remark">Remark : </label>
          <input
            type="text"
            id="remark"
            value={remark}
            onChange={(event) => setRemark(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default TDTeamSection;
