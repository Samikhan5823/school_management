import React, { useState, useEffect } from 'react'
import LoginAction from '../redux/actions/LoginAction'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ForgetPassword from './ForgetPassword'
import Validator from '../Utilties/validator'
import { enumUtil } from '../Utilties/enum'
const Login = () => {

  const loginStore = useSelector((state) => state.LoginReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openForgetPass, setOpenForgetPass] = useState(false)
  const [showpasordtoggle, setShowpasordtoggle] = useState(false)
  const[saveClicked,setSaveClick]=useState(false)
  const[validationModal,setvalidationModal]=useState({ 
     emailError:'',
  passwordError:''})

    // For Validation Purpose
    const setValidation = () => {
      setvalidationModal((prevState)=>({
       ...prevState,
       emailError:Validator(email,
        enumUtil.enumValidationType.Required,
        'Email'
       ),
       passwordError:Validator(password,
        enumUtil.enumValidationType.Required,
        'Password'
        )
      }))

      
    }
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
    setValidation()
  }
  const handleLogin = () => {
    setValidation()
    let validation = Validator(
      [validationModal],
      enumUtil.enumValidationType.NullCheck,
    )
if(validation){
  setSaveClick(true)
}else{
  setSaveClick(false)

}
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
                 <h1 className='text-center mt-0'>VPS</h1>
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
                    {saveClicked&&validationModal.emailError}

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
                    {saveClicked&&validationModal.passwordError}
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
                          marginTop: '-45px',
                          color: '#3392FF',
                          fontSize:'30px'
                        }}
                      ></i>
                    </div>
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  {loginStore.loginFailed &&saveClicked===false? (
                      <p className="text-danger">Please Enter Valid Email and Password</p>
                    ) : null}
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
