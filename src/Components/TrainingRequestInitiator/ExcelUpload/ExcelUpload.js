import React, { useState } from "react";
import { utils, read } from "xlsx";
import { Link } from "react-router-dom";
import "../ExcelUpload/ExcelUpload.css";

const ExcelUpload = () => {
  const [excelData, setExcelData] = useState([]);

  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const handleChange = (e) => {
    const selectFile = e.target.files[0];

    if (selectFile) {
      if (selectFile && fileType.includes(selectFile.type)) {
        let reader = new FileReader();

        reader.onload = (e) => {
          const workbook = read(e.target.result);

          console.log(workbook.Sheets.name);

          const sheet = workbook.SheetNames;

          console.log(sheet);

          if (sheet.length) {
            const data = utils.sheet_to_json(workbook.Sheets[sheet[0]]);

            setExcelData(data);
          }
        };

        reader.readAsArrayBuffer(selectFile);
      } else {
        console.log("Only accept excel file");
      }

      console.log(selectFile.type);
    }
  };

  return (
    <div className="main">
      <h1 className="dashboard-heading">Excel Upload</h1>
      <div>
        <Link to="/trainreq">
          <button className="dashboard-button">
            <span>Back</span>
          </button>
        </Link>
        <div className="justify-center item-center flex flex-col">
          <div>
            <input type="file" onChange={handleChange} />
          </div>
          <div>
            <table className="table">
              <thead className="th">
                <tr>
                  <th>SR.ID</th>

                  <th>EmpID</th>

                  <th>Name</th>

                  <th>Trainer</th>

                  <th>Email</th>

                  <th>Experience(in Years)</th>

                  <th>CurrentAllocation</th>

                  <th>Upgraded_Skill_Set</th>

                  <th>Batch</th>

                  <th>Mentor</th>
                </tr>
              </thead>

              <tbody className="td">
                {excelData.length ? (
                  excelData.map((info) => (
                    <tr>
                      <td>{info.No}</td>

                      <td>{info.EmpID}</td>

                      <td>{info.Name}</td>

                      <td>{info.Trainer}</td>

                      <td>{info.Email}</td>

                      <td>{info.Experience}</td>

                      <td>{info.CurrentAllocation}</td>

                      <td>{info.UpgradedSkillSet} </td>

                      <td>{info.Batch}</td>

                      <td>{info.Mentor}</td>
                    </tr>
                  ))
                ) : (
                  <tr>No data</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelUpload;

// import React, { useState } from "react";
// import { utils, read } from "xlsx";
// import { Link } from "react-router-dom";
// import "../ExcelUpload/ExcelUpload.css";

// const ExcelUpload = () => {
//   const [excelData, setExcelData] = useState([]);

//   const fileType = [
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//   ];

//   const handleChange = (e) => {
//     const selectFile = e.target.files[0];

//     if (selectFile) {
//       if (selectFile && fileType.includes(selectFile.type)) {
//         let reader = new FileReader();

//         reader.onload = (e) => {
//           const workbook = read(e.target.result);
//           const sheet = workbook.Sheets[0];
//           const data = utils.sheet_to_json(sheet);
//           setExcelData(data);
//         };

//         reader.readAsArrayBuffer(selectFile);
//       } else {
//         console.log("Only accept excel file");
//       }
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-heading">Excel Upload</h1>
//       <div className="buttons text-center">
//         <Link to="/trainreq">
//           <button className="dashboard-button">
//             <span>Back</span>
//           </button>
//         </Link>
//       </div>
//       <div className="list-container">
//         <input type="file" onChange={handleChange} />
//         <table className="table">
//           <thead>
//             <tr>
//               <th>SR.ID</th>
//               <th>EmpID</th>
//               <th>Name</th>
//               <th>Trainer</th>
//               <th>Email</th>
//               <th>Experience(in Years)</th>
//               <th>Current Allocation</th>
//               <th>Upgraded Skill Set</th>
//               <th>Batch</th>
//               <th>Mentor</th>
//             </tr>
//           </thead>
//           <tbody>
//             {excelData.length ? (
//               excelData.map((info, index) => (
//                 <tr key={index}>
//                   {/* Here, we are updating the code to only show the first sheet of the Excel file. */}
//                   <td>{info.No}</td>
//                   <td>{info.EmpID}</td>
//                   <td>{info.Name}</td>
//                   <td>{info.Trainer}</td>
//                   <td>{info.Email}</td>
//                   <td>{info.Experience}</td>
//                   <td>{info.CurrentAllocation}</td>
//                   <td>{info.UpgradedSkillSet}</td>
//                   <td>{info.Batch}</td>
//                   <td>{info.Mentor}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10">No data</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExcelUpload;
