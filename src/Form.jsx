// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import useForm from "./useForm";
// import validate from "./LoginFormValidationRules";
// import { Redirect } from "react-router-dom";

// const Form = props => {
//   const { values, errors, handleChange, handleSubmit } = useForm(
//     login,
//     validate
//   );
//   const [loggedIn, setLoggedIn] = useState(false);

//   function login() {
//     setLoggedIn(true);
//     props.parentCallback(true);
//     return <Redirect to="/default" />;
//   }

//   return (
//     <div className="section is-fullheight">
//       {loggedIn && <Redirect to="/default" />}
//       <div className="container">
//         <div className="column is-6 is-offset-3">
//           <div className="box">
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit} noValidate>
//               <div className="field">
//                 <label className="label">Email Address</label>
//                 <div className="control">
//                   <input
//                     autoComplete="off"
//                     className={`input ${errors.email && "is-danger"}`}
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     value={values.email || ""}
//                     required
//                   />
//                   {errors.email && (
//                     <p className="help is-danger">{errors.email}</p>
//                   )}
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Password</label>
//                 <div className="control">
//                   <input
//                     className={`input ${errors.password && "is-danger"}`}
//                     type="password"
//                     name="password"
//                     onChange={handleChange}
//                     value={values.password || ""}
//                     required
//                   />
//                 </div>
//                 {errors.password && (
//                   <p className="help is-danger">{errors.password}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="button is-block is-info is-fullwidth"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;




// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import useForm from "./useForm";
// import validate from "./LoginFormValidationRules";

// const Form = props => {
//   const { values, errors, handleChange, handleSubmit } = useForm(
//     login,
//     validate
//   );
//   const [loggedIn, setLoggedIn] = useState(false);

//   function login() {
//     setLoggedIn(true);
//     props.parentCallback(true);
//   }

//   // Redirects if loggedIn is true
//   if (loggedIn) {
//     return <Navigate to="/default" />;
//   }

//   return (
//     <div className="section is-fullheight">
//       <div className="container">
//         <div className="column is-6 is-offset-3">
//           <div className="box">
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit} noValidate>
//               <div className="field">
//                 <label className="label">Email Address</label>
//                 <div className="control">
//                   <input
//                     autoComplete="off"
//                     className={`input ${errors.email && "is-danger"}`}
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     value={values.email || ""}
//                     required
//                   />
//                   {errors.email && (
//                     <p className="help is-danger">{errors.email}</p>
//                   )}
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Password</label>
//                 <div className="control">
//                   <input
//                     className={`input ${errors.password && "is-danger"}`}
//                     type="password"
//                     name="password"
//                     onChange={handleChange}
//                     value={values.password || ""}
//                     required
//                   />
//                 </div>
//                 {errors.password && (
//                   <p className="help is-danger">{errors.password}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="button is-block is-info is-fullwidth"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useForm from "./UseForm";
import validate from "./LoginFormValidationRules";

const Form = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  function login() {
    // Simulate a login attempt (you would replace this with actual login logic)
    const isSuccessful = true; // Replace with actual login logic
    if (isSuccessful) {
      setLoggedIn(true);
      props.parentCallback(true);
    } else {
      setLoginError("Invalid email or password."); // Set error message on failed login
    }
  }

  // Redirects if loggedIn is true
  if (loggedIn) {
    return <Navigate to="/default" />;
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            {loginError && <p className="help is-danger">{loginError}</p>} {/* Show login error */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && <p className="help is-danger">{errors.email}</p>}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && <p className="help is-danger">{errors.password}</p>}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

