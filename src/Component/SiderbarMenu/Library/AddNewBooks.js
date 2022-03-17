import React, { useState } from 'react'

const AddNewBook = (props) => {
    let obj = {
        id: props.isEdit ? props.isEditData.id : '',
        firstName: props.isEdit ? props.isEditData.firstName : '',
        lastName: props.isEdit ? props.isEditData.lastName : ''
    }
    const [state, setState] = useState(obj)
    const [addData, setAddData] = useState([])
    const handlerChange = (e) => {
        let { name, value } = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const saveAcademic = () => {
        props.addDataToParent(state)
        props.closeAddNew()
     
    }
    return (
        <div className='row mt-5'>
            <div className='col-md-12 col-sm-12'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='d-flex headingcolums justify-content-between mb-3 '>
                            <h5>Add New Academic</h5>
                            <div className='d-flex justify-content-end'>
                                <button
                                    type='button'
                                    className='btn btn-outline-danger'
                                    onClick={props.closeAddNew}
                                >
                                    Cancel
                                </button>

                                <button
                                    type='button'
                                    className='btn btn-primary'
                                    onClick={saveAcademic}
                                >
                                    {props.isEdit ? "Update" : "Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                            <label className="required" htmlFor>
                                First Name!!
                            </label>
                            <input
                                className="form-control"
                                id='firstName'
                                name='firstName'
                                onChange={handlerChange}
                                value={state.firstName}
                            />

                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                            <label className="required" htmlFor>
                                Last Name!!
                            </label>
                            <input
                                className="form-control"
                                id='lastName'
                                name='lastName'
                                onChange={handlerChange}
                                value={state.lastName}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddNewBook