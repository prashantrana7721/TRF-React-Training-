import React, { useState } from "react";

const TDForm = (props) => {
  const [assignedTo, setAssignedTo] = useState("");
  const [remark, setRemark] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      assignedTo: assignedTo,
      remark: remark
    };
    console.log(newTask); // log the new task data to the console
    setAssignedTo("");
    setRemark("");
  };

  const handleAssignedToChange = (event) => {
    setAssignedTo(event.target.value);
    console.log("Assigned To: ", event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
    console.log("Remark: ", event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="assignedTo">Assigned To: </label>
        <input
          type="text"
          id="assignedTo"
          value={assignedTo}
          onChange={handleAssignedToChange}
        />
      </div>
      <div>
        <label htmlFor="remark">Remark: </label>
        <input
          type="text"
          id="remark"
          value={remark}
          onChange={handleRemarkChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TDForm;