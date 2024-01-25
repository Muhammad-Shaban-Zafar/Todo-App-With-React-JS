import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

// variables decleration
const userObject = {
  email: "",
  password: "",
};
// end 

export default function Login() {
  // use useState
  const [state, setState] = useState(userObject);
  // end

  // input handle change
  function onChangeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  }
  // end

  // form submit funtion
  function formSubmit(e) {
    e.preventDefault();
  }
  // end

  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <form onSubmit={formSubmit} className="row">
            <div className="col-5 mx-auto shadow p-5">
              <div className="row mb-3 text-start">
                <div className="col">
                  <h2 className="">Welcome Back</h2>
                  <p>Enter your details and start learning</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      name="email"
                      placeholder="name@gmail.com"
                      onChange={onChangeHandler}
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingInput"
                      name="password"
                      placeholder="password"
                      onChange={onChangeHandler}
                    />
                    <label for="floatingInput">Password</label>
                  </div>
                </div>
              </div>

              <div className="row text-start text-primary">
                <Link className="FP">Forget Password</Link>
              </div>

              <div className="row mt-4">
                <div className="col-12">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary fw-bold" type="submit">
                      Login <FontAwesomeIcon icon={faRightToBracket} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row text-start mt-2">
                <p>
                  Do not have an account?
                  <Link to="authentication/login" className="su text-primary ms-1">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
