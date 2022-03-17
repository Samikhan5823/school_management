
import React, { useState } from 'react'
import { Courses, Batch, Year, Month, AttendanceviewCol } from '../../../Utilties/DropdownValues'
import { Table } from '../../../Utilties/LatestTable'

const AttendanceView = () => {
  const [courses, setCourses] = useState('')
  const [showDropdown, setshowDropdown] = useState(false)
  const [tableData, settableData] = useState([])


  const handleDropdown = (e) => {
    setshowDropdown(true)
    setCourses(e.target.value)
  }


  return (
    <>

      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h6 className='panel-title'>
              Attendance Report
              </h6>

            </div>
            <div className='panel-body'>
              <div className='row'>
                <div className='col-sm-2'>
                  <div className='form-group'>

                    <label className='heading-name'>Course:</label>
                    <select className="form-control form-select " onChange={handleDropdown} value={courses}>
                      {Courses.map((el) => {
                        return (
                          <option key={el.value} value={el.value}>{el.display}</option>
                        )
                      })}
                    </select>

                  </div>
                </div>
                {showDropdown &&
                  <>
                    <div className=' col-sm-2 '>
                      <div className='form-group'>
                        <label className='heading-name'>Batch:</label>
                        <select className="form-control form-select ">
                          {Batch.map((el) => {
                            return (
                              <option key={el.value} value={el.value}>{el.display}</option>
                            )
                          })}
                        </select>

                      </div>
                    </div>
                    <div className=' col-sm-2 '>
                      <div className='form-group'>
                        <label className='heading-name'>Year:</label>
                        <select className="form-control form-select ">
                          {Year.map((el) => {
                            return (
                              <option key={el.value} value={el.value}>{el.display}</option>
                            )
                          })}
                        </select>

                      </div>
                    </div>
                    <div className=' col-sm-2 '>
                      <div className='form-group'>
                        <label className='heading-name'>Month:</label>
                        <select className="form-control form-select ">
                          {Month.map((el) => {
                            return (
                              <option key={el.value} value={el.value}>{el.display}</option>
                            )
                          })}
                        </select>

                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="form-group">

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
                          // onClick={saveBookCat}
                          >
                            Save
                          </button>
                        </div>

                      </div>
                    </div>

                  </>}
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h6 className='panel-title'>
                Attendanced
              </h6>
            </div>
            <div className='panel-body'>
              <Table
                columns={AttendanceviewCol}
                currentPage={1}
                data={tableData}
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
    </>
  )
}

export default AttendanceView