import React, { useState } from "react";
import Dates from "./Date";
import "./TrainingRequestList.css";

const TrainingRequestList = (props) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTrainingData, setEditedTrainingData] = useState({
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

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedTrainingData(props.trainingRequests[index]);
  };

  const handleCancelClick = () => {
    setEditingIndex(-1);
    setEditedTrainingData({
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

  const handleSaveClick = () => {
    props.onUpdateTrainingRequest(editingIndex, editedTrainingData);
    setEditingIndex(-1);
    setEditedTrainingData({
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
    setEditedTrainingData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

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
            <th>Training End Date</th>
            <th>Initiated From</th>
            <th>Project Name</th>
            <th>Skills to be Imparted</th>
            <th>No. of Participants</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainingRequests.map((request, index) => (
            <tr key={index}>
              {editingIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="trainingTitle"
                      value={editedTrainingData.trainingTitle}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <select
                      name="trainingType"
                      value={editedTrainingData.trainingType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Training Type</option>
                      <option value="FRW">Future Ready WorkForce</option>
                      <option value="DRWF">Digital ready Workforce</option>
                      <option value="On Demand">On Demand</option>
                      <option value="Project Specific">Project Specific</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="resourceType"
                      value={editedTrainingData.resourceType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Resource Type</option>
                      <option value="Fresher">Fresher</option>
                      <option value="Lateral">Lateral</option>
                      <option value="CDAC">CDAC</option>
                      <option value="Interns">Interns</option>
                      <option value="On Bench">On Bench</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="duration"
                      value={editedTrainingData.duration}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="purpose"
                      value={editedTrainingData.purpose}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="startDate"
                      value={editedTrainingData.startDate}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="endDate"
                      value={editedTrainingData.endDate}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="initiatedFrom"
                      value={editedTrainingData.initiatedFrom}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="projectName"
                      value={editedTrainingData.projectName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="skills"
                      value={editedTrainingData.skills}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="participants"
                      value={editedTrainingData.participants}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{request.trainingTitle}</td>
                  <td>{request.trainingType}</td>
                  <td>{request.resourceType}</td>
                  <td>{request.duration}</td>
                  <td>{request.purpose}</td>
                  <td>
                    <Dates date={request.startDate} />
                  </td>
                  <td>
                    <Dates date={request.endDate} />
                  </td>
                  <td>{request.initiatedFrom}</td>
                  <td>{request.projectName}</td>
                  <td>{request.skills}</td>
                  <td>{request.participants}</td>
                  <td>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingRequestList;


// import React from "react";
// import Dates from "./Date";
// import "./TrainingRequestList.css";

// const TrainingRequestList = (props) => {
//   console.log("Training requests inside TrainingRequestList:", props.trainingRequests);
//   const trainingRequests = props.trainingRequests || [];

//   return (
//     <div className="training-request-list">
//       <table>
//         <thead>
//           <tr>
//             <th>Training Title</th>
//             <th>Training Type</th>
//             <th>Resource Type</th>
//             <th>Duration (In Days)</th>
//             <th>Purpose of Training</th>
//             <th>Training Start Date</th>
//             <th>Training End Date</th>
//             <th>Initiated From</th>
//             <th>Project Name</th>
//             <th>Skills to be Imparted</th>
//             <th>No. of Participants</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trainingRequests.map((request, index) => (
//             <tr key={index}>
//               <td>{request.trainingTitle}</td>
//               <td>{request.trainingType}</td>
//               <td>{request.resourceType}</td>
//               <td>{request.duration}</td>
//               <td>{request.purpose}</td>
//               <td>
//                 <Dates date={request.startDate} />
//               </td>
//               <td>
//                 <Dates date={request.endDate} />
//               </td>
//               <td>{request.initiatedFrom}</td>
//               <td>{request.projectName}</td>
//               <td>{request.skills}</td>
//               <td>{request.participants}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainingRequestList;
