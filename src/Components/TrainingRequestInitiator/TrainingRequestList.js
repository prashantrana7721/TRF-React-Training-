import React from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 
import './TrainingRequestInitiator.css';
import '../TrainingRequestInitiator/List.css';

const TrainingRequestList = ({ data }) => {
  return (
    <div className="table-container">
      <div style={{ fontSize: '20px', marginBottom: '2rem' }}>Training Request Initiator Data</div>
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
          {data.map((row) => (
            <tr key={row.id}>
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
  );
};

export default TrainingRequestList;


// import React from 'react';
// import 'react-datepicker/dist/react-datepicker.css'; 
// import './TrainingRequestInitiator.css';
// import '../TrainingRequestInitiator/List.css';

// const TrainingRequestList = ({ data }) => {
//   return (
//     <div className="table-container">
//       <div style={{ fontSize: '20px', marginBottom: '2rem' }}>Training Request Initiator Data</div>
//       <table>
//         <thead>
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
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td>{row.training_title}</td>
//               <td>{row.training_type}</td>
//               <td>{row.resource_type}</td>
//               <td>{row.duration}</td>
//               <td>{row.purpose}</td>
//               <td>{row.startDate}</td>
//               <td>{row.endDate}</td>
//               <td>{row.initiated_from}</td>
//               <td>{row.project_name}</td>
//               <td>{row.skills}</td>
//               <td>{row.participants}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainingRequestList;
