import React from 'react'

const ForgetPassword = (props) => {
    return (
        <>
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
                <div className="modal-dialog modal-dialog-centered modal-md handle" style={{ maxWidth: "none", margin: "0", position: "relative" }}>

                    <div className="modal-content" style={{ width: "800px", height: "500px", zIndex: 10, margin: "100px 0 50px 88px", position: "absolute", left: "30%", top: "5%" }}>

                        <div className="modal-header dragable">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Forget Password
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span onClick={props.closeForgetPassPopUp}>
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="modal-body pt-0">
                            <div style={{ position: 'relative', height: 90 }}>
                                <label for="password">
                                    Old Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="password"
                                    id="password"
                                    className="form-control"

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

                                </label>

                                <span className="text-danger">
                                </span>
                            </div>

                            <div style={{ position: 'relative', height: 88 }}>
                                <label for="conformPassword">
                                    New Password <span className="text-danger">×</span>
                                </label>
                                <input

                                    name="conformPassword"
                                    id="conformPassword"
                                    className="form-control"

                                />
                                <label
                                    htmlFor="conformPassword"

                                >

                                </label>
                                <span className="text-danger">
                                </span>
                            </div>
                            <div style={{ position: 'relative', height: 88 }}>
                                <label for="conformPassword">
                                    Confirm New Password <span className="text-danger">×</span>
                                </label>
                                <input

                                    name="conformPassword"
                                    id="conformPassword"
                                    className="form-control"

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

                                </label>
                                <span className="text-danger">
                                </span>
                            </div>
                            <span className="text-danger">
                            </span>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn round-btn-01"
                                    aria-label="Reset"
                                >
                                    Save Password
                                </button>

                                <button
                                    aria-label="Close Popup Model"
                                    type="button"
                                    className="btn round-btn-01"
                                    onClick={props.closeForgetPassPopUp}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ForgetPassword