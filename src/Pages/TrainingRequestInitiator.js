import React, { useState } from "react";
import Card from "../UI/Card";
import TrainingRequestInitiatorForm from "./TrainingRequestInitiatorForm";
import TrainingRequestList from "./TrainingRequestList";
import "./TrainingRequestInitiator.css";

const TrainingRequestInitiator = (props) => {
  const [trainingRequests, setTrainingRequests] = useState([]);

  const addTrainingRequestHandler = (request) => {
    console.log("New training request:", request);
    setTrainingRequests((prevRequests) => [...prevRequests, request]);
  };

  return (
    <Card>
      <h1>Training Request Initiator</h1>
      <TrainingRequestInitiatorForm onAddTrainingRequest={addTrainingRequestHandler} />
      <TrainingRequestList trainingRequests={trainingRequests} />
    </Card>
  );
};

export default TrainingRequestInitiator;
