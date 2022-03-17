import React, { useState } from 'react'
import { Table } from '../../Utilties/LatestTable'
import AddNewBook from './AddNewBooks'
import isNull from '../../Utilties/NullChecking'
import Swal from 'sweetalert2'
const Book = (props) => {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [adNew, setadNew] = useState(false)
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [selectedID, setSelectedID] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  const [isEditData, setIsEditData] = useState({})
  const addDataToParent = (newData) => {
    if (isEdit) {
      let updateData = data.map((el) => {
        if (el.id === isEditData.id) {
          return newData
        } else {
          return el
        }
      })
      setData(updateData)
    } else {
      setData((prevState) => ([
        ...prevState, { ...newData, id: prevState.length }
      ]))
    }
  }
  const onChangeSearch = (e) => {
    let filteredData = data.filter((items) =>
      items['firstName'].toLowerCase().startsWith(e.target.value) || items['lastName'].toLowerCase().startsWith(e.target.value),
    )
    if (isNull(e.target.value)) {
      setFilterData([])
    } else {
      setFilterData(filteredData)
    }
  }
  const editChange = (value) => {
    setadNew(true)
    setIsEdit(true)
    setIsEditData(value)
  }

  const addNewBook = () => {
    setIsEdit(false)
    setadNew(true)
  }
  const deleteData = (id) => {
    Swal.fire({
      title: 'Are you sure, you want to delete this record?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(() => {
    let updataArray = data.filter((el) => {
      return el.id != id
    })
    setData(updataArray)
  })
  }
  const closeAddNew = () => {
    setadNew(false)
  }
  const columData = [

    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Action',
      accessor: 'action',
      Footer: '',
      width: '100px',
      Cell: ({ row }) => (
        <>
          <button type="button" className="btn btn-default btn-sm" title="Edit"
            onClick={() => editChange(row.original)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button
            style={{ cursor: 'pointer' }}
            data-toggle="modal"
            href="#warningalert"
            type="button"
            className="btn btn-default btn-sm"
            title="Delete"
            onClick={() => deleteData(row.original.id)}
          >
            <i className="fa fa-trash-o text-danger"></i>
          </button>
        </>
      ),
    },

  ]
  return (
    <>
      {adNew ? (<AddNewBook addDataToParent={addDataToParent} closeAddNew={closeAddNew} isEdit={isEdit} isEditData={isEditData} />) : (
        <div className='container  text-center'>
          <h6>Books Table</h6>
          <div className='row'>
            <div className='d-flex bd-highlight'>
              <div className='p-2 flex-grow-1 bd-highlight' id=''>
                <div className='d-flex '>
                  <input
                    style={{ marginTop: '3px' }}
                    className='form-control flex-fill'
                    type='text'
                    placeholder='Search by first, last name and email'
                    onChange={onChangeSearch}
                  />
                  <button type='button' className='btn btn-light'>
                    <i className='fa fa-search' aria-hidden='true'></i>
                  </button>
                </div>
              </div>
              <div className='p-2 bd-highlight'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={addNewBook}
                  // disabled={props.addEdit ? false : true}
                  title={props.addEdit ? '' : "Don't have Rights"}
                >
                  Add New
                </button>
              </div>
            </div>

            <div className="col-md-12">
              <div className="overflowhidden height100">
                <Table
                  columns={columData}
                  currentPage={1}
                  data={filterData.length === 0 ? data : filterData}
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
      )}
    </>
  )
}

export default Book
