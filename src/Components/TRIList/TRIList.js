// import React, { useContext } from 'react';
// import { TrainingRequestContext, TrainingRequestProvider } from '../Context/TrainingRequestContext';


// export default function TRIList() {
//     const { trainingRequests } = useContext(TrainingRequestContext);

//     const dummyData = [
//         {
//           training_title: 'Python Training',
//           training_type: 'On Demand',
//           resource_type: 'Fresher',
//           duration: 5,
//           purpose: 'Upskilling',
//           startDate: '2024-03-08',
//           endDate: '2025-03-19',
//           initiated_from: 'Engineering',
//           project_name: 'Project A',
//           skills: 'Python, Data Structures, Algorithms',
//           participants: 10,
//         },
//         {
//           training_title: 'Java Training',
//           training_type: 'Project Specific',
//           resource_type: 'Lateral',
//           duration: 10,
//           purpose: 'Upskilling',
//           startDate: '2023-03-15',
//           endDate: '2023-04-15',
//           initiated_from: 'Sales',
//           project_name: 'Project B',
//           skills: 'Java, Spring Boot, React',
//           participants: 5,
//         },
//         {
//           training_title: 'JavaScript Training',
//           training_type: 'Contract Basis',
//           resource_type: 'Fresher',
//           duration: 10,
//           purpose: 'Upskilling',
//           startDate: '2023-03-15',
//           endDate: '2023-04-15',
//           initiated_from: 'Sales',
//           project_name: 'Project B',
//           skills: 'Java, Spring Boot, React',
//           participants: 5,
//         },
//       ];
  
//       const allTrainingRequests = trainingRequests.concat(dummyData);
    
  
//   return (
//     <TrainingRequestProvider>
//     <header style={headerStyle}>
//       <h1 className="main-title text-center">TRI List</h1>
//       <div className="main-para text-center"></div>
//      {/* <div className="buttons text-center">
//         <Link to="/trainreq">
//           <button className="primary-button" id="reg_btn">
//             <span>New Request</span>
//           </button>
//         </Link>
//        <Link to="/participantdetails">
//           <button className="primary-button" id="reg_btn">
//             <span>Participant Details</span>
//           </button>
//         </Link>
//       </div> */}
//       <h5 className="list-heading">Training Requests Initiator Data</h5>
//       <div className="list-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Training Title</th>
//               <th>Training Type</th>
//               <th>Resource Type</th>
//               <th>Duration (In Days)</th>
//               <th>Purpose Of Training</th>
//               <th>Training Start Date</th>
//               <th>Training End Date</th>
//               <th>Initiated From</th>
//               <th>Project Name</th>
//               <th>Skills To Be Imparted</th>
//               <th>No. Of Participants</th>
//             </tr>
//           </thead>
//           <tbody>
//           {/* {trainingRequests.map((row, index) => (
//     // Rest of the code
//   ))} */}
//             {allTrainingRequests.map((row, index) => (
//               <tr key={index}>
//                 <td>{row.training_title}</td>
//                 <td>{row.training_type}</td>
//                 <td>{row.resource_type}</td>
//                 <td>{row.duration}</td>
//                 <td>{row.purpose}</td>
//                 <td>{row.startDate}</td>
//                 <td>{row.endDate}</td>
//                 <td>{row.initiated_from}</td>
//                 <td>{row.project_name}</td>
//                 <td>{row.skills}</td>
//                 <td>{row.participants}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </header>
//         </TrainingRequestProvider>
//   );
// }

// const headerStyle = {
//   width: '100%',
//   height: '100vh',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
// };
