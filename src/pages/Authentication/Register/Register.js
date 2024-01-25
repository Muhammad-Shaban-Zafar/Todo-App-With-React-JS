import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";


export default function Register() {

  function formSubmit() {}

  function onChangeHandler() {}


  return (
    <>
    <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <form onSubmit={formSubmit} className="row">
            <div className="col-5 mx-auto shadow p-5">
              <div className="row mb-3 text-start">
                <div className="col">
                  <h2 className="">Create Account</h2>
                  <p>Enter your details and start learning</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      name="firstName"
                      placeholder="FirstName"
                      onChange={onChangeHandler}
                    />
                    <label for="floatingInput">First Name</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      name="lastName"
                      placeholder="lastName"
                      onChange={onChangeHandler}
                    />
                    <label for="floatingInput">Last Name</label>
                  </div>
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
                    <label for="floatingInput">Email Address</label>
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
                    <label for="floatingInput">Create Password</label>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary fw-bold" type="submit">
                      Create Acount <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                  </div>
                  
                </div>
              </div>
              <div className="row text-start mt-2">
              <p>If already have an account? 
                <Link to ="authentication/login"
                  className='li text-primary ms-1'>Login</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
