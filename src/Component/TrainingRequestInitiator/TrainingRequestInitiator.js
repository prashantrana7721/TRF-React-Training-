
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './TrainingRequestInitiator.css';
import '../TrainingRequestInitiator/List.css';
import { Button } from "react-bootstrap";
import Dropzone from "react-dropzone";

export default function TrainingRequestInitiator() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const [excelFile, setExcelFile] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = Object.fromEntries(formData.entries());
    newData.startDate = startDate ? new Date(startDate).toLocaleDateString() : ""; 
    newData.endDate = endDate ? new Date(endDate).toLocaleDateString() : ""; 
    setData((prevData) => [...prevData, newData]);
    setStartDate(null);
    setEndDate(null);
    event.target.reset();
  };
  
  

  const handleStartDateChange = (date) => {
    if (date) {
      setStartDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    if (date) {
      setEndDate(date);
    }
  };
  
  const handleUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setExcelFile(file);
  };
  
  

  return (
    <div className="form-container">
      <h2>Training Request Initiator Section</h2>
      <h5>Enter Training Request Details</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Training Title :</label><br />
          <input type="text" name="training_title" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Training Type :</label><br />
          <select name="training_type" required>
            <option value="">Select option</option>
            <option value="1">FRW ( Future Ready WorkForce )</option>
            <option value="2">DRWF ( Digital ready Workforce )</option>
            <option value="3">On Demand</option>
            <option value="4">Project Specific</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Resource Type :</label><br />
          <select name="resource_type" required>
            <option value="">Select option</option>
            <option value="1">Fresher</option>
            <option value="2">Lateral</option>
            <option value="3">CDAC</option>
            <option value="4">Interns</option>
            <option value="5">On Bench</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Duration ( In Days ) :</label><br />
          <input type="number" name="duration" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Purpose Of Training :</label><br />
          <textarea name="purpose" required></textarea>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Training Start Date:</label><br />
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Training End Date:</label><br />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Initiated From :</label><br />
          <input type="text" name="initiated_from" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Project Name (In Case Of Project Specific) :</label><br />
          <input type="text" name="project_name" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Skills To Be Imparted :</label><br />
          <textarea name="skills" required></textarea>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>No. Of Participants :</label><br />
          <input type="number" name="participants" required />
        </div>
        <br /> {/*Line Space*/}
        <div>
          <button id="sub_btn" type="submit">SUBMIT</button>
        </div>
        <br /> {/*Line Space*/}
        <div>
          <button id="sub_btn" type="button">NEXT</button>
        </div>
        <br /> {/*Line Space*/}
        <div>
        <Dropzone accept=".xlsx" onDrop={acceptedFiles => handleUpload(acceptedFiles)}>
  {({ getRootProps, getInputProps }) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button id="sub_btn" type="button">UPLOAD</Button>
    </div>
  )}
</Dropzone>
{excelFile && (
        <div style={{ width: '300px', overflow: 'hidden', textOverflow: 'ellipsis' , textAlign: 'center'}}>Uploaded File : {excelFile.name}</div>
      )}
    </div>
      </form>
      <div className="table-container">
      <div style={{ fontSize: '20px', marginBottom: '2rem',}}>Training Request Initiator Data</div>
      <table>
       <thead>
          <tr>
            <th>Training Title</th>
            <th>Training Type</th>
            <th>Resource Type</th>
            <th>Duration (In Days)</th>
            <th>Purpose Of Training</th>
            <th>Training Start Date</th>
            <th>Training End Date</th>
            <th>Initiated From</th>
            <th>Project Name</th>
            <th>Skills To Be Imparted</th>
            <th>No. Of Participants</th>
          </tr>
        </thead>
        <tbody>
  {data.map((row, index) => (
    <tr key={index}>
      <td>{row.training_title}</td>
      <td>{row.training_type}</td>
      <td>{row.resource_type}</td>
      <td>{row.duration}</td>
      <td>{row.purpose}</td>
      <td>{row.startDate}</td>
      <td>{row.endDate}</td>
      <td>{row.initiated_from}</td>
      <td>{row.project_name}</td>
      <td>{row.skills}</td>
      <td>{row.participants}</td>
    </tr>
  ))}
</tbody>
      </table>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; 
// import './TrainingRequestInitiator.css';
// import '../TrainingRequestInitiator/List.css';
// import { Button } from "react-bootstrap";
// import Dropzone from "react-dropzone";

// export default function TrainingRequestInitiator() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [data, setData] = useState([]);
//   const [excelFile, setExcelFile] = useState();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const newData = Object.fromEntries(formData.entries());
//     newData.startDate = startDate ? new Date(startDate).toLocaleDateString() : ""; 
//     newData.endDate = endDate ? new Date(endDate).toLocaleDateString() : ""; 
//     setData((prevData) => [...prevData, newData]);
//     setStartDate(null);
//     setEndDate(null);
//     event.target.reset();
//   };
  
  

//   const handleStartDateChange = (date) => {
//     if (date) {
//       setStartDate(date);
//     }
//   };

//   const handleEndDateChange = (date) => {
//     if (date) {
//       setEndDate(date);
//     }
//   };
  
//   const handleUpload = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     setExcelFile(file);
//   };
  
  

//   return (
//     <div className="form-container">
//       <h2>Training Request Initiator Section</h2>
//       <h5>Enter Training Request Details</h5>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Training Title :</label><br />
//           <input type="text" name="training_title" required />
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Training Type :</label><br />
//           <select name="training_type" required>
//             <option value="">Select option</option>
//             <option value="1">FRW ( Future Ready WorkForce )</option>
//             <option value="2">DRWF ( Digital ready Workforce )</option>
//             <option value="3">On Demand</option>
//             <option value="4">Project Specific</option>
//           </select>
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Resource Type :</label><br />
//           <select name="resource_type" required>
//             <option value="">Select option</option>
//             <option value="1">Fresher</option>
//             <option value="2">Lateral</option>
//             <option value="3">CDAC</option>
//             <option value="4">Interns</option>
//             <option value="5">On Bench</option>
//           </select>
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Duration ( In Days ) :</label><br />
//           <input type="number" name="duration" required />
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Purpose Of Training :</label><br />
//           <textarea name="purpose" required></textarea>
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Training Start Date:</label><br />
//           <DatePicker
//             selected={startDate}
//             onChange={handleStartDateChange}
//             dateFormat="dd-MM-yyyy"
//             required
//           />
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Training End Date:</label><br />
//           <DatePicker
//             selected={endDate}
//             onChange={handleEndDateChange}
//             dateFormat="dd-MM-yyyy"
//             required
//           />
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           <label>Initiated From :</label><br />
//           <input type="text" name="initiated_from" required />
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Project Name (In Case Of Project Specific) :</label><br />
//           <input type="text" name="project_name" />
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>Skills To Be Imparted :</label><br />
//           <textarea name="skills" required></textarea>
//         </div>
//         <div style={{ marginTop: '10px' }}>
//           <label>No. Of Participants :</label><br />
//           <input type="number" name="participants" required />
//         </div>
//         <br /> {/*Line Space*/}
//         <div>
//           <button id="sub_btn" type="submit">SUBMIT</button>
//         </div>
//         <br /> {/*Line Space*/}
//         <div>
//           <button id="sub_btn" type="button">NEXT</button>
//         </div>
//         <br /> {/*Line Space*/}
//         <div>
//         <Dropzone accept=".xlsx" onDrop={acceptedFiles => handleUpload(acceptedFiles)}>
//   {({ getRootProps, getInputProps }) => (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       <Button id="sub_btn" type="button">UPLOAD</Button>
//     </div>
//   )}
// </Dropzone>
// {excelFile && (
//         <div style={{ width: '300px', overflow: 'hidden', textOverflow: 'ellipsis' , textAlign: 'center'}}>Uploaded File : {excelFile.name}</div>
//       )}
//     </div>
//       </form>
//       <div className="table-container">
//       <table>
//        <thead>
//           <tr>
//             <th>Training Title</th>
//             <th>Training Type</th>
//             <th>Resource Type</th>
//             <th>Duration (In Days)</th>
//             <th>Purpose Of Training</th>
//             <th>Training Start Date</th>
//             <th>Training End Date</th>
//             <th>Initiated From</th>
//             <th>Project Name</th>
//             <th>Skills To Be Imparted</th>
//             <th>No. Of Participants</th>
//           </tr>
//         </thead>
//         <tbody>
//   {data.map((row, index) => (
//     <tr key={index}>
//       <td>{row.training_title}</td>
//       <td>{row.training_type}</td>
//       <td>{row.resource_type}</td>
//       <td>{row.duration}</td>
//       <td>{row.purpose}</td>
//       <td>{row.startDate}</td>
//       <td>{row.endDate}</td>
//       <td>{row.initiated_from}</td>
//       <td>{row.project_name}</td>
//       <td>{row.skills}</td>
//       <td>{row.participants}</td>
//     </tr>
//   ))}
// </tbody>
//       </table>
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./TrainingRequestInitiator.css";
// import * as XLSX from "xlsx";
// import ExcelData from './ExcelData'
// import { useNavigate } from "react-router-dom";


// export default function TrainingRequestInitiator() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [fileData, setFileData] = useState(null);
//   const [rows, setRows] = useState([]);
//   const nav = useNavigate();

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
  
//     reader.onload = (e) => {
//       const workbook = XLSX.read(e.target.result, { type: "binary" });
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
//       setFileData(data);
//       setRows(
//         data.map((row, index) => (
//           <tr key={index}>
//             {row.map((column, i) => (
//               <td key={i}>{column}</td>
//             ))}
//           </tr>
//         ))
//       );
//       nav("/exceldata");
//     };
  
//     reader.readAsBinaryString(file);
//   };

//   useEffect(() => {
//     if (fileData) {
//       setRows(
//         fileData.map((row, index) => (
//           <tr key={index}>
//             {row.map((column, i) => (
//               <td key={i}>{column}</td>
//             ))}
//           </tr>
//         ))
//       );
//     }
//   }, [fileData]);

//   return (
//     <div className="form-container">
//       <h2>Training Request Initiator Section</h2>
//       <h5>Enter Training Request Details</h5>
//       <form>
//         <div>
//           <label>Training Title :</label>
//           <br />
//           <input type="text" name="training_title" required />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Training Type :</label>
//           <br />
//           <select name="training_type" required>
//             <option value="">Select option</option>
//             <option value="1">FRW ( Future Ready WorkForce )</option>
//             <option value="2">DRWF ( Digital ready Workforce )</option>
//             <option value="3">On Demand</option>
//             <option value="4">Project Specific</option>
//           </select>
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Resource Type :</label>
//           <br />
//           <select name="resource_type" required>
//             <option value="">Select option</option>
//             <option value="1">Fresher</option>
//             <option value="2">Lateral</option>
//             <option value="3">CDAC</option>
//             <option value="4">Interns</option>
//             <option value="5">On Bench</option>
//           </select>
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Duration ( In Days ) :</label>
//           <br />
//           <input type="number" name="duration" required />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Purpose Of Training :</label>
//           <br />
//           <textarea name="purpose" required></textarea>
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Training Start Date:</label>
//           <br />
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             dateFormat="dd-MM-yyyy"
//             required
//           />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Training End Date:</label>
//           <br />
//           <DatePicker
//             selected={endDate}
//             onChange={(date) => setEndDate(date)}
//             dateFormat="dd-MM-yyyy"
//             required
//           />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Initiated From :</label>
//           <br />
//           <input type="text" name="initiated_from" required />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Project Name (In Case Of Project Specific) :</label>
//           <br />
//           <input type="text" name="project_name" />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Skills To Be Imparted :</label>
//           <br />
//           <textarea name="skills" required></textarea>
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>No. Of Participants :</label>
//           <br />
//           <input type="number" name="participants" required />
//         </div>
//         <br /> {/*Line Space*/}
//         <div>
//           <button id="sub_btn" type="submit">
//             SUBMIT
//           </button>
//         </div>
//         <br /> {/*Line Space*/}
//         <div>
//           <button id="sub_btn" type="button">
//             NEXT
//           </button>
//         </div>
//         <br /> {/*Line Space*/}
//         <div style={{ marginTop: "10px" }}>
//           <label>Upload Excel</label>
//           <br />
//           <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
//         </div>

//         <div>
//         {rows.length > 0 && <ExcelData rows={fileData} />}
//         </div>
//       </form>
//     </div>
//   );
// }