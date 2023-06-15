import React, { useState } from "react";

const ApproverForm = (props) => {
  const [approverName, setApproverName] = useState("");
  const [remark, setRemark] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newApprovalRequest = {
      approverName: approverName,
      remark: remark,
      approvalStatus: approvalStatus
    };
    console.log(newApprovalRequest); // log the new approval request data to the console
    setApproverName("");
    setRemark("");
    setApprovalStatus("");
  };

  const handleApproverNameChange = (event) => {
    setApproverName(event.target.value);
    console.log("Approver Name: ", event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
    console.log("Remark: ", event.target.value);
  };

  const handleApprovalStatusChange = (event) => {
    setApprovalStatus(event.target.value);
    console.log("Approval Status: ", event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="approverName">Approver Name: </label>
        <input
          type="text"
          id="approverName"
          value={approverName}
          onChange={handleApproverNameChange}
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
      <div>
        <label htmlFor="approvalStatus">Approval Status: </label>
        <select
          id="approvalStatus"
          value={approvalStatus}
          onChange={handleApprovalStatusChange}
        >
          <option value="">Select Approval Status</option>
          <option value="Approve">Approve</option>
          <option value="Not Approve">Not Approve</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApproverForm;
