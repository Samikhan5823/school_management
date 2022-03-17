import React from 'react'

const ResetPassPopUp = (props) => {
  return (
    <div
    className="modal d-block fade-show"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    role="dialog"
    style={{
      backgroundColor: 'rgba(77, 77, 77, 0.6)',
      zIndex: '9000',
    }}
  >
    <div className="modal-dialog modal-dialog-centered modal-md handle" style={{maxWidth:"none",margin:"0",position:"relative"}}>
   
      <div className="modal-content" style={{width:"500px",zIndex:10,margin:"100px 0 50px 88px",position:"absolute",left:"30%",top:"5%"}}>
     
        <div className="modal-header dragable">
          <h5 className="modal-title" id="exampleModalLabel">
            Reset Password
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span  onClick={props.closeResetPopup}>
              ×
            </span>
          </button>
        </div>
        
        <div className="modal-body pt-0">
          <div style={{ position: 'relative', height: 90 }}>
            <label for="password">
              Password <span className="text-danger">*</span>
            </label>
            <input
            //   type={`${passwordmes?.showpassword ? 'text' : 'password'}`}
              name="password"
              id="password"
              className="form-control"
            //   value={resetpasword.password}
            //   onClick={() =>
            //     setpasswordmes({ ...passwordmes, showicon12: true })
            //   }
            //   onChange={handlechangePassword}
            />

            <label
              htmlFor="password"
              style={{
                top: '38%',
                right: '2%',
                position: 'absolute',
                fontSize: '15px',
              }}
            >
              {/* {passwordmes.showicon12 ? (
                <i
                  className={`${
                    passwordmes.showpassword ? 'fa fa-eye' : 'fa fa-eye-slash'
                  }`}
                  aria-hidden="true"
                  onClick={() =>
                    setpasswordmes({
                      ...passwordmes,
                      showpassword: !passwordmes.showpassword,
                    })
                  }
                  style={{ fontSize: '14px', color: '#3392FF' }}
                ></i>
              ) : (
                ''
              )} */}
            </label>

            <span className="text-danger">
              {/* {validationerror.validationerror?.password} */}
            </span>
          </div>

          <div style={{ position: 'relative', height: 88 }}>
            <label for="conformPassword">
              Confirm Password <span className="text-danger">×</span>
            </label>
            <input
            //   type={`${
            //     passwordmes?.showconfirmpassword ? 'text' : 'password'
            //   }`}
              name="conformPassword"
              id="conformPassword"
              className="form-control"
            //   value={resetpasword.conformPassword}
            //   onClick={() =>
            //     setpasswordmes({ ...passwordmes, showicon1: true })
            //   }
            //   onChange={handlechangePassword}
            />
            <label
              htmlFor="conformPassword"
              style={{
                right: '2%',
                top: '39%',
                position: 'absolute',
                fontSize: '15px',
              }}
            >
              {/* {passwordmes.showicon1 ? (
                <i
                  className={`${
                    passwordmes.showconfirmpassword
                      ? 'fa fa-eye'
                      : 'fa fa-eye-slash'
                  }`}
                  aria-hidden="true"
                  onClick={() =>
                    setpasswordmes({
                      ...passwordmes,
                      showconfirmpassword: !passwordmes.showconfirmpassword,
                    })
                  }
                  style={{ fontSize: '14px', color: '#3392FF' }}
                ></i>
              ) : (
                ''
              )} */}
            </label>
            <span className="text-danger">
              {/* {validationerror.validationerror?.conformPassword} */}
            </span>
          </div>
          <span className="text-danger">
            {/* {validationerror.validationerror?.compaire} */}
          </span>

          <div className="modal-footer">
            <button
              type="button"
              className="btn round-btn-01"
            //   onClick={resetpassword}
              aria-label="Reset"
            >
              Reset Password
            </button>

            <button
              aria-label="Close Popup Model"
              type="button"
              className="btn round-btn-01"
              onClick={props.closeResetPopup}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
   
  </div>

  )
}

export default ResetPassPopUp