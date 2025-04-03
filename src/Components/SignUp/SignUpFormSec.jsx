import React from "react";


function SignUpFormSec() {
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
                      <label htmlFor="createuserName">Your Name</label>
                      <div className="ic-group">
                        <input
                          type="text"
                          name="createuser-name"
                          id="createuserName"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="create-useremail">Your Email</label>
                      <div className="ic-group">
                        <input
                          type="text"
                          name="create-user-email"
                          id="create-useremail"
                          placeholder="Enter Mail"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="createPassword">Password</label>
                      <div className="ic-group pass">
                        <input
                          type="password"
                          name="create-Password"
                          id="createPassword"
                          placeholder="Enter Password"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="createconfirmPassword">
                        Confirm Password
                      </label>
                      <div className="ic-group pass">
                        <input
                          type="password"
                          name="createconfirm-Password"
                          id="createconfirmPassword"
                          placeholder="Confirm Password"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="section__content-cta">
                      <button
                        type="submit"
                        className="btn--secondary"
                        data-text="Create Account"
                      >
                        <span>Create Account</span>
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
                    Have an account?
                    <a href="/Components/SignIn">Sign In!</a>
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

export default SignUpFormSec;
