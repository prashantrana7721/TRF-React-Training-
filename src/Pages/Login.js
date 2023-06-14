// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import Card from '../UI/Card';
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const submitHandler = (event) => {
//     event.preventDefault();
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
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
//         {error && <p>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </Card>
//   );
// };

// export default Login;
