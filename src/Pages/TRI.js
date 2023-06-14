import React, { useState } from "react";
import Card from '../UI/Card';
import "./TRI.css";

const TrainingRequestInitiator = (props) => {
  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [duration, setDuration] = useState("");
  const [purpose, setPurpose] = useState("");
  const [startDate, setStartDate] = useState("");
  const [initiatedFrom, setInitiatedFrom] = useState("");
  const [projectName, setProjectName] = useState("");
  const [skills, setSkills] = useState("");
  const [participants, setParticipants] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newTrainingRequest = {
      title: trainingTitle,
      type: trainingType,
      resourceType: resourceType,
      duration: duration,
      purpose: purpose,
      startDate: startDate,
      initiatedFrom: initiatedFrom,
      projectName: projectName,
      skills: skills,
      participants: participants
    };
    console.log(newTrainingRequest); // log the new training request data to the console
    setTrainingTitle("");
    setTrainingType("");
    setResourceType("");
    setDuration("");
    setPurpose("");
    setStartDate("");
    setInitiatedFrom("");
    setProjectName("");
    setSkills("");
    setParticipants("");
  };

  const handleTitleChange = (event) => {
    setTrainingTitle(event.target.value);
    console.log("Training Title: ", event.target.value);
  };

  const handleTypeChange = (event) => {
    setTrainingType(event.target.value);
    console.log("Training Type: ", event.target.value);
  };

  const handleResourceTypeChange = (event) => {
    setResourceType(event.target.value);
    console.log("Resource Type: ", event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    console.log("Duration: ", event.target.value);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    console.log("Purpose: ", event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    console.log("Start Date: ", event.target.value);
  };

  const handleInitiatedFromChange = (event) => {
    setInitiatedFrom(event.target.value);
    console.log("Initiated From: ", event.target.value);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
    console.log("Project Name: ", event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
    console.log("Skills: ", event.target.value);
  };

  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
    console.log("Participants: ", event.target.value);
  };

  return (
    <Card>
      <h1>Training Request Initiator</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="trainingTitle">Training Title : </label>
          <input
            type="text"
            id="trainingTitle"
            value={trainingTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="trainingType">Training Type : </label>
          <select
            id="trainingType"
            value={trainingType}
            onChange={handleTypeChange}
          >
            <option value="">Select Training Type</option>
            <option value="FRW">Future Ready WorkForce</option>
            <option value="DRWF">Digital ready Workforce</option>
            <option value="On Demand">On Demand</option>
            <option value="Project Specific">Project Specific</option>
          </select>
        </div>
        <div>
          <label htmlFor="resourceType">Resource Type : </label>
          <select
            id="resourceType"
            value={resourceType}
            onChange={handleResourceTypeChange}
          >
            <option value="">Select Resource Type</option>
            <option value="Fresher">Fresher</option>
            <option value="Lateral">Lateral</option>
            <option value="CDAC">CDAC</option>
            <option value="Interns">Interns</option>
            <option value="On Bench">On Bench</option>
          </select>
        </div>
        <div>
          <label htmlFor="duration">Duration (In Days) : </label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={handleDurationChange}
          />
        </div>
        <div>
          <label htmlFor="purpose">Purpose of Training : </label>
          <input
            type="text"
            id="purpose"
            value={purpose}
            onChange={handlePurposeChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Training Start Date (dd-mm-yyyy) : </label>
          <input
            type="text"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <label htmlFor="initiatedFrom">Initiated From : </label>
          <input
            type="text"
            id="initiatedFrom"
            value={initiatedFrom}
            onChange={handleInitiatedFromChange}
          />
        </div>
        <div>
          <label htmlFor="projectName">Project Name : </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={handleProjectNameChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills to be Imparted : </label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={handleSkillsChange}
          />
        </div>
        <div>
          <label htmlFor="participants">No. of Participants : </label>
          <input
            type="text"
            id="participants"
            value={participants}
            onChange={handleParticipantsChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default TrainingRequestInitiator;