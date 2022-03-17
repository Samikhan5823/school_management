import React, { useState } from 'react'
import { Table } from '../../Utilties/LatestTable'
import Swal from 'sweetalert2'
import toaster from '../../Utilties/toaster'
import validator from '../../Utilties/validator'
import { enumUtil } from '../../Utilties/enum'
import isNull from '../../Utilties/NullChecking'
const BooksCategory = (props) => {
// ==============Validator Model ===============

  const validatorModel = {
    catName: '',
    sectCode: ''
  }
// ==============State ===============
  const [bookCat, setbookCat] = useState([])
  const [categoryID, setCtegoryID] = useState(0)
  const [categoryName, setCtegoryName] = useState('')
  const [sectionCode, setSectionCode] = useState('')
  const [saveClick, setSaveClick] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [validationState, setValidationState] = useState(validatorModel)
// ==============HandlerChange Function===============
  const handlerChange = (e) => {
    if (e.target.name === 'categoryName') {
      return setCtegoryName(e.target.value)

    }
    setSectionCode(e.target.value)
    setValidation()
  }
// ==============Save BookCat Function===============

  const saveBookCat = () => {
    if (isNull(categoryName) || isNull(sectionCode)) {
      setValidation()
      setSaveClick(true)
      return
    } else {
      setSaveClick(false)

    }
    setIsEdit(false)
    if (isEdit) {
      let updateData = bookCat.map((el) => {
        if (el.id === categoryID) {
          return { id: categoryID, categoryName, sectionCode }
        } else {
          return el
        }
      })
      setbookCat(updateData)
      setCtegoryName('')
      setSectionCode('')
      Swal.fire('Edit Successfully', 'success ')
      return
    }
    setbookCat([...bookCat, { categoryName, sectionCode, id: bookCat.length + 1 }])
    toaster('Save Successfully', enumUtil.enumtoaster.success)
    setCtegoryName('')
    setSectionCode('')
  }
// ==============Delete BookCat Function===============

  const deleteBookCat = (id) => {
    let updataArray = bookCat.filter((el) => {
      return el.id != id
    })
    setbookCat(updataArray)
  }
// ==============Edit BookCat Function===============

  const editBookCat = (value) => {
    setIsEdit(true)
    setCtegoryID(value.id)
    setCtegoryName(value.categoryName)
    setSectionCode(value.sectionCode)
  }
// ==============Set Validation Function===============

  const setValidation = () => {
    setValidationState({
      catName: validator(categoryName,
        enumUtil.enumValidationType.Required,
        'Category Name'
      ),
      sectCode: validator(sectionCode,
        enumUtil.enumValidationType.Required,
        'Section Code'
      ),
    })

  }
  const columData = [
    {
      Header: 'Category Name',
      accessor: 'categoryName',
    },
    {
      Header: 'Section Code',
      accessor: 'sectionCode',
    },
    {
      Header: 'Action',
      accessor: 'action',
      Footer: '',
      width: '100px',
      Cell: ({ row }) => (
        <>
          <button type="button" className="btn btn-default btn-sm" title="Edit"
            onClick={() => editBookCat(row.original)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            style={{ cursor: 'pointer' }}
            data-toggle="modal"
            href="#warningalert"
            type="button"
            className="btn btn-default btn-sm"
            title="Delete"
            onClick={() => deleteBookCat(row.original.id)}
          >
            <i className="fa fa-trash-o text-danger"></i>
          </button>
        </>
      ),
    },
  ]
  return (
    <div className='content'>
      <div className='row mt-5'>
        <div className='col-md-12 col-sm-12'>
          <div className='panel panel-default'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='d-flex headingcolums justify-content-between mb-3 '>
                  <h5>Add Book Category</h5>
                  <div className='d-flex justify-content-end'>
                    <button
                      type='button'
                      className='btn btn-outline-danger'
                    // onClick={props.closeAddNew}
                    >
                      Clear
                    </button>

                    <button
                      type='button'
                      className='btn btn-primary'
                      onClick={saveBookCat}
                    >
                      {isEdit ? "Update" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="required" htmlFor>
                    Category Name
                  </label>
                  <input
                    className="form-control"
                    id='categoryName'
                    name='categoryName'
                    onChange={handlerChange}
                    value={categoryName}
                  />
                  {saveClick === true ? validationState.catName : ''}

                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="required" htmlFor>
                    Section Code
                  </label>
                  <input
                    className="form-control"
                    id='sectionCode'
                    name='sectionCode'
                    onChange={handlerChange}
                    value={sectionCode}
                  />
                  {saveClick === true ? validationState.sectCode : ''}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className='row'>


        <div className="col-md-12">
          <div className="overflowhidden height100">
            <Table
              columns={columData}
              currentPage={1}
              data={bookCat}
              totalPages={10}
              totalCount={10}
              handlePerRowsChange={() => { }}
              handlePageChange={() => { }}
              // handleRowClicked={this.handleRowClicked}
              // pagination={true}
              fixedHeaderFooter={true}
              rowSelection={false}
              forNormalRendering={true}
              // footer={false}
              width={'100px'}
              minWidth={'100%'}
              dynamicClass="tableEncounterGeneral"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default BooksCategory