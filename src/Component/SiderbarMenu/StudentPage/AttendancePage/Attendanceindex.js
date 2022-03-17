import React, { useState } from 'react'
import AbsentsReports from './AbsentsReports'
import Attendance from './Attendance'
import AttendanceView from './AttendanceView'

const Attendanceindex = () => {
  const [activeTab, setactiveTab] = useState(1)
  return (
    <>
      <div className='content'>
        <div className='panel panel-default'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='d-flex headingcolums justify-content-between mb-3 '>
                <div>
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className={activeTab === 1 ? 'nav-link active' : 'nav-link '}
                          onClick={(e) => setactiveTab(1)}
                          href="#/"
                        >
                          Attendance
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={activeTab === 2 ? 'nav-link active' : 'nav-link '}
                          onClick={(e) => setactiveTab(2)}

                          href="#/"
                        >
                          Attendance View
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={activeTab === 3 ? 'nav-link active' : 'nav-link '}
                          onClick={(e) => setactiveTab(3)}

                          href="#/"
                        >
                          AbsentsReports
                        </a>
                      </li>
                    </ul>
                </div>
              
              </div>
            </div>
          </div>

        </div>
      </div>


      {activeTab === 1 && <Attendance />}
      {activeTab === 2 && <AttendanceView />}
      {activeTab === 3 && <AbsentsReports />}
    </>
  )
}

export default Attendanceindex