// import React, { useState } from "react";
// import firebase from "firebase";
// import "firebase/auth";
// import Card from '../UI/Card';
// import "./Reg.css";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <Card className="card">
//       <form onSubmit={submitHandler}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(event) => setConfirmPassword(event.target.value)}
//           />
//         </div>
//         {error && <p>{error}</p>}
//         <button type="submit">Register</button>
//       </form>
//     </Card>
//   );
// };

// export default Register;
