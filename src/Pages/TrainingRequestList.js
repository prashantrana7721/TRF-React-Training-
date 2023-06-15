import React from "react";
import Dates from "./Date";
import "./TrainingRequestList.css";

const TrainingRequestList = (props) => {
  console.log("Training requests inside TrainingRequestList:", props.trainingRequests);
  const trainingRequests = props.trainingRequests || [];

  return (
    <div className="training-request-list">
      <table>
        <thead>
          <tr>
            <th>Training Title</th>
            <th>Training Type</th>
            <th>Resource Type</th>
            <th>Duration (In Days)</th>
            <th>Purpose of Training</th>
            <th>Training Start Date</th>
            <th>Initiated From</th>
            <th>Project Name</th>
            <th>Skills to be Imparted</th>
            <th>No. of Participants</th>
          </tr>
        </thead>
        <tbody>
          {trainingRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.trainingTitle}</td>
              <td>{request.trainingType}</td>
              <td>{request.resourceType}</td>
              <td>{request.duration}</td>
              <td>{request.purpose}</td>
              <td>
                <Dates date={request.startDate} />
              </td>
              <td>{request.initiatedFrom}</td>
              <td>{request.projectName}</td>
              <td>{request.skills}</td>
              <td>{request.participants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingRequestList;
