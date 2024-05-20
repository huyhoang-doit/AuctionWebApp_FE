import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleToRegister = () => {
        navigate("/register");
    };
    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">Login </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Begin Umino's Login Register Area   */}
            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                            {/* <!-- Login Form s--> */}
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>

                                    <div className="row mb-4">
                                        <div className="col-md-12 col-12">
                                            <label>Email Address*</label>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box">
                                                <input
                                                    type="checkbox"
                                                    id="remember_me"
                                                />
                                                <label htmlFor="remember_me">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="forgotton-password_info">
                                                <a href="#">
                                                    {" "}
                                                    Forgotten pasward?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="umino-login_btn">
                                                Login
                                            </button>
                                        </div>
                                    </div>

                                    <a onClick={() => handleToRegister()}>
                                        You haven't a acount ?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
