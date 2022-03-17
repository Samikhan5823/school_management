import React from 'react'

const ConfirmationPopUp = (props) => {
    const { heading, error, bodyText } = props

  return (
    <>
    <div
      className="modal fade show"
      id="warningalert"
      role="dialog"
      style={{
        display: 'block',
        paddingRight: '2px',
        backgroundColor: 'red',
        zIndex: 9000,
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className={
            error === 'error'
              ? 'modal-content rederrorcolor'
              : 'modal-content yellowerrorcolor'
          }
        >
          <button
            type="button"
            className="close alertbrossicon"
            data-dismiss="modal"
          // aria-label//
          >
            <span>×</span>
          </button>
          <div className="modal-body">
            <div className="alerticoncenter">
              <i
                className={
                  error === 'error'
                    ? 'fa fa-times-circle-o'
                    : 'fa fa-question-circle-o '
                }
                aria-hidden="true"
                style={{
                  fontSize: '80px',
                  color: error === 'error' ? '#e74a3b' : '#DBA443',
                }}
              ></i>
            </div>
            <div className="aligncenter alertheading">{heading}</div>
            <div className="aligncenter alertcontent margintop26">
              <p>{bodyText}</p>
            </div>
            <div className="displayflex justify-content-center margintop28 marginbottom20">
              {error === 'error' ? (
                <>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() =>
                      props.confirmationPopupHandler(false)
                    }
                    data-dismiss="modal"
                  >
                    ok
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() =>
                      props.confirmationPopupHandler(true)
                    }
                    data-dismiss="modal"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger "
                    onClick={() =>
                      props.confirmationPopupHandler(false)
                    }
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ConfirmationPopUp