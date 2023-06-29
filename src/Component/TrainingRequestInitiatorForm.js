import React, { useState } from "react";

const TrainingRequestInitiatorForm = (props) => {
  const [trainingData, setTrainingData] = useState({
    trainingTitle: "",
    trainingType: "",
    resourceType: "",
    duration: "",
    purpose: "",
    startDate: "",
    endDate: "",
    initiatedFrom: "",
    projectName: "",
    skills: "",
    participants: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(trainingData); // log the new training request data to the console
    props.onAddTrainingRequest(trainingData); // add the new training request data to the list
    setTrainingData({
      trainingTitle: "",
      trainingType: "",
      resourceType: "",
      duration: "",
      purpose: "",
      startDate: "",
      endDate: "",
      initiatedFrom: "",
      projectName: "",
      skills: "",
      participants: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrainingData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(`${name}: ${value}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="trainingTitle">Training Title : </label>
        <input
          type="text"
          id="trainingTitle"
          name="trainingTitle"
          value={trainingData.trainingTitle}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="trainingType">Training Type : </label>
        <select
          id="trainingType"
          name="trainingType"
          value={trainingData.trainingType}
          onChange={handleInputChange}
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
          name="resourceType"
          value={trainingData.resourceType}
          onChange={handleInputChange}
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
          name="duration"
          value={trainingData.duration}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="purpose">Purpose of Training : </label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          value={trainingData.purpose}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Training Start Date : </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={trainingData.startDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">Training End Date : </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={trainingData.endDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="initiatedFrom">Initiated From : </label>
        <input
          type="text"
          id="initiatedFrom"
          name="initiatedFrom"
          value={trainingData.initiatedFrom}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="projectName">Project Name : </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={trainingData.projectName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="skills">Skills to be Imparted : </label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={trainingData.skills}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="participants">No. of Participants : </label>
        <input
          type="text"
          id="participants"
          name="participants"
          value={trainingData.participants}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TrainingRequestInitiatorForm;
