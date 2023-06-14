import React, { useState } from "react";
import Card from '../UI/Card';
import "./Approver.css";

const ApproverSection = () => {
  const [approverName, setApproverName] = useState("");
  const [remark, setRemark] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <Card>
      <h1>Approver Section</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="approverName">Approver Name: </label>
          <input
            type="text"
            id="approverName"
            value={approverName}
            onChange={(event) => setApproverName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="remark">Remark: </label>
          <input
            type="text"
            id="remark"
            value={remark}
            onChange={(event) => setRemark(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="approvalStatus">Approval Status: </label>
          <select
            id="approvalStatus"
            value={approvalStatus}
            onChange={(event) => setApprovalStatus(event.target.value)}
          >
            <option value="">Select Approval Status</option>
            <option value="Approve">Approve</option>
            <option value="Not Approve">Not Approve</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default ApproverSection;
