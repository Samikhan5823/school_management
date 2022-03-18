import React, { useState, useEffect } from 'react'
import LoginAction from '../redux/actions/LoginAction'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ForgetPassword from './ForgetPassword'
const Login = () => {
  const loginStore = useSelector((state) => state.LoginReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openForgetPass, setOpenForgetPass] = useState(false)
  const [showpasordtoggle, setShowpasordtoggle] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  const handleLogin = () => {
    dispatch(LoginAction({ email, password }))
  }
  useEffect(() => {
    if (loginStore.isLoggedin) navigate('/')
  }, [loginStore])
  const openForgetPassPopUp = () => {
    setOpenForgetPass(true)
  }
  const closeForgetPassPopUp = () => {
    setOpenForgetPass(false)

  }
  const showpasword = () => {
    setShowpasordtoggle(!showpasordtoggle)
  }
  return (
    <>
      {openForgetPass && <ForgetPassword closeForgetPassPopUp={closeForgetPassPopUp} />}
      <div>
        <section>
          <div className="container-fluid h-custom vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form autoComplete="nope">
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    {loginStore.loginFailed ? (
                      <p className="text-danger">please select</p>
                    ) : null}
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      name="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      value={email}
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type={showpasordtoggle ? 'text' : 'password'}

                      name="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => handleChange(e)}
                    />
                    <div
                      style={{
                        position: 'relative',
                      }}
                    >
                      <i
                        className={`${showpasordtoggle ? 'fa fa-eye' : 'fa fa-eye-slash'
                          }`}
                        aria-hidden="true"
                        onClick={showpasword}
                        style={{
                          fontSize: '15px',
                          position: 'absolute',
                          right: '20px',
                          top: '0px',
                          marginTop: '-40px',
                          color: '#3392FF',
                          fontSize:'30px'
                        }}
                      ></i>
                    </div>
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#/" className="text-body" onClick={openForgetPassPopUp}>
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: '2.5rem', paddingRright: '2.5rem' }}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{' '}
                      <a href="#/" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
