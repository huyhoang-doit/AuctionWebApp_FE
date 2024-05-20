import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleToLogin = () => {
        navigate("/login");
    };
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active"> Register</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Register</h4>
                                    <div className="row mb-4">
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Email Address*</label>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="umino-register_btn">
                                                Register
                                            </button>
                                        </div>
                                    </div>

                                    <a onClick={() => handleToLogin()}>
                                        You have a acount ?
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
