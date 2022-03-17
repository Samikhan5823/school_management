import React from 'react'
import StudentPic from '../../../images/student.png'
import EmployeePic from '../../../images/employe.png'
import CoursesPic from '../../../images/courses.png'
import BatchPic from '../../../images/batch.png'

import Chart from './Chart'
const Dashboard = (props) => {
  return (
    
    <div className="page-header" >
      <div className="row"  >
        <div className="page-header-content">
          <div className="row">
            <div className="col-3">
              <div className="panel card-1">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={StudentPic} alt="pic"></img>
                    </div>
                    <div className="col-lg-6">71</div>
                    TOTAL STUDENTS
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="panel card-1">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={EmployeePic} alt="pic"></img>
                    </div>
                    <div className="col-lg-6">65</div>
                    TOTAL Employee
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="panel card-1">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={CoursesPic} alt="pic"></img>
                    </div>
                    <div className="col-lg-6">122</div>
                    TOTAL Courses
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-3">
              <div className="panel card-1">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={BatchPic} alt="pic"></img>
                    </div>
                    <div className="col-lg-6">23</div>
                    TOTAL Batch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-12 col-xl-8">
              <div className=" panel-heading">
              <ul className="news-heading">
                  <li className="active">
                    <a className="text-size-small text-uppercase">
                  <h6 className="panel-title">Daily Attendance Overview </h6>

                    </a>
                  </li>
                </ul>
              </div>

              <div className=" panel-body">
                {' '}
                <Chart />{' '}
              </div>
            </div>
            <div className="col-lg-12 col-xl-4 mb-sm-2">
              <div className=" panel-heading">
                <h6></h6>
              </div>
              <div
                className=" panel panel-flat"
                style={{ height: '30vh' }}
              >
                <ul className="news-heading">
                  <li className="active">
                    <a className="text-size-small text-uppercase">
                      Notice Board
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <ul className="media-list">
                    <li className="media">
                      <div className="media-left">
                   
                        <span className="badge ">f</span>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          Hi Students
                          <span>
                            <i className="media-calender"> 12-10-2020</i>
                          </span>
                        </a>
                        <span className="display-text">
                          <marquee behavior="scroll" direction="left">
                            Tomorrow Result will be decleared ...{' '}
                          </marquee>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
               
              </div>



              <div
                className=" panel panel-flat"
                style={{ height: '30vh'}}
              >
                <ul className="news-heading">
                  <li className="active">
                    <a className="text-size-small text-uppercase">
                      FEE COLLECTION
                    </a>
                  </li>
                </ul>
                <div >
                <div className="heading-elements" >
                      <span>
                            <i className="media-calender"style={{marginTop:'100px'}}> 12-10-2020</i>
                          </span>
                </div>
                  <div className=" row text-center d-flex m-5">
                    <div className="col-md-4">
                      <div className="content-group">
                        <h6 className="text-semibold-no-margin">
                          <i className="icon-cash3-position-left-text-slate"></i>
                          0
                        </h6>
                        <span className="text-muted text-size-small">
                          {' '}
                          Amount
                        </span>
                      </div>
                 
                    </div>
                    <div className="col-md-4">
                      <div className="content-group">
                        <h6 className="text-semibold-no-margin">
                          <i className="icon-cash3-position-left-text-slate"></i>
                          34
                        </h6>
                        <span className="text-muted text-size-small">
                          {' '}
                          Discount
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="content-group">
                        <h6 className="text-semibold-no-margin">
                          <i className="icon-cash3-position-left-text-slate"></i>
                          30
                        </h6>
                        <span className="text-muted text-size-small">
                          {' '}
                          Fine
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </div>
                </div>
             
              </div>





            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
