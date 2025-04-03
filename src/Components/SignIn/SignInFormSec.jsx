import React from "react";

function SignInFormSec() {
  return (
    <>
      {/* ==== authentication section start ==== */}
      <div className="authentication pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-6">
              <div className="authentication__wrapper">
                <div className="authentication__inner">
                  <form action="#" method="post">
                    <div className="input-single">
                      <label htmlFor="userName">Username</label>
                      <div className="ic-group">
                        <input
                          type="text"
                          name="user-name"
                          id="userName"
                          placeholder="Username"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="userPassword">Password</label>
                      <div className="ic-group pass">
                        <input
                          type="password"
                          name="user-Password"
                          id="userPassword"
                          placeholder="Enter Password"
                          required=""
                        />
                      </div>
                      <a href="/Components/ContactUs">Forget Password?</a>
                    </div>
                    <div className="section__content-cta">
                      <button
                        type="submit"
                        className="btn--secondary"
                        data-text="Sign In"
                      >
                        <span>Sign In</span>
                      </button>
                    </div>
                    <div className="divider">
                      <span />
                      <p>Or continue with</p>
                      <span />
                    </div>
                  </form>
                  <div className="auth-cta">
                    <button>
                      <img src="/assets/images/google.png" alt="Image" />
                    </button>
                    <button>
                      <img src="/assets/images/meta.png" alt="Image" />
                    </button>
                  </div>
                </div>
                <div className="auth-footer">
                  <p>
                    Don't have an account?
                    <a href="/Components/SignUp">Sign Up!</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==== / authentication section end ==== */}
    </>
  );
}

export default SignInFormSec;
