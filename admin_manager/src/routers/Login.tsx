// import React, { useState, ChangeEvent } from 'react';
// import { useNavigate } from 'react-router-dom';





// const Login: React.FC = () => {
//   const [loginRequest, setLoginRequest] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const onChangeLoginRequest = (key: keyof typeof loginRequest) => (e: ChangeEvent<HTMLInputElement>) => {
//     setLoginRequest((prevValue) => ({ ...prevValue, [key]: e.target.value }));
//   };
 
  
//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     const { email, password } = loginRequest;
    
   
//     // Dummy validation logic
//     if (email === "admin@example.com" && password === "admin") {
//       setError("");
//       navigate('/admin'); // Redirect to admin page after successful login
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   return (
//     <div className="img js-fullheight" style={{ backgroundImage: 'url(img/background.jpg)' }}>
//       <div className="container-fluid plr_30 body_white_bg pt_30">
//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <div className="white_box mb_30">
//               <div className="row justify-content-center">
//                 <div className="col-lg-6">
//                   <div className="modal-content cs_modal">
//                     <div className="modal-header">
//                       <h5 className="modal-title text-center">Đăng nhập vào hệ thống quản lý đấu giá</h5>
//                     </div>
//                     <div className="modal-body">
//                       <form onSubmit={handleLogin}>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Nhập email của bạn"
//                             value={loginRequest.email}
//                             onChange={onChangeLoginRequest("email")}
//                             required
//                           />
//                         </div>
//                         <div className="form-group">
//                           <div className="input-group">
//                             <input
//                               type={isPasswordVisible ? "text" : "password"}
//                               className="form-control"
//                               placeholder="Mật khẩu"
//                               value={loginRequest.password}
//                               onChange={onChangeLoginRequest("password")}
//                               required
//                             />
//                             <div className="input-group-append">
//                               <span
//                                 className="input-group-text"
//                                 onClick={togglePasswordVisibility}
//                                 style={{ cursor: 'pointer' }}
//                               >
//                                 <i className={`fa ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}
//                         <button type="submit" className="btn_1 full_width text-center" >Đăng nhập</button>
                        
                        
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
