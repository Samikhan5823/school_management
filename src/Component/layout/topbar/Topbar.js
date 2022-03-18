import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import Placeholder from '../../../images/placeholder.jpg'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import './topbar.css'
import LogOutAction from '../../redux/actions/LogOutAction'
import ResetPassPopUp from '../topbar/resetPassword/ResetPassPopUp'


export default function Topbar(props) {
  const dispatch = useDispatch()

  const [openMenues, setopenMenues] = useState(props.openMenu)
  const [openRestPop, setopenRestPop] = useState(false)


  const handleLogOut = () => {
    dispatch(LogOutAction())
  }
  const show = () => {
    props.show()
    setopenMenues(!openMenues)
  }
  const closeResetPopup = () => {
    setopenRestPop(false)

  }
  const openResetPopup = () => {
    setopenRestPop(true)
  }
  return (
    <>
      {openRestPop ? <ResetPassPopUp closeResetPopup={closeResetPopup} /> : ''}


      <div className="topBar">
        <div className="burger-icon">
          {openMenues ? (
            <ImCross onClick={() => show()} />
          ) : (
            <GiHamburgerMenu onClick={() => show()} />
          )}
        </div>
        <div className="d-flex flex-fill width-100-per justify-content-end ">
          {/* <img src={''} alt="" className="small-logo" /> */}
          <div className="d-flex align-items-center ">
            <div className="d-flex justify-content-between">
              <input
                className="topbar-input"
                placeholder="Search..."
                type="text"
              />
              <span className="search-tag">
                {' '}
                <BiSearchAlt2 />
              </span>
              <h5
                className="mr-3"
                style={{
                  color: 'rgb(255, 255, 255)',
                  fontWeight: 'bold',
                  paddingRight: '8px',
                  marginTop: '5px',
                }}
              >
                <h1 className="d-none">heading</h1>
                <span className="mr-2 ">Admin</span>
                <span>
                  {' '}
                  <img className="img-circle" src={Placeholder} alt="pic" />
                </span>

              </h5>
            </div>
            <div
              className="d-flex align-items-center ml-md-auto max-width-230px"
              style={{
                borderLeft: '1px solid white',
                paddingLeft: '8px',
              }}
            >
              <div className="topbar-dropdown ">
                <span className="title ">
                  Welcome!
                  <IoIosArrowDropdown style={{ fontSize: '25px' }} />
                </span>
                <i
                  className="fa fa-chevron-down arow-down mt-n3"
                  aria-hidden="true"
                ></i>
                <div className="topbar-dropdown-content gap-force-right">
                  <ul>

                    <li>
                      <div className="d-flex flex-column">
                        <div class="logout-btn">
                          <a
                            href="#/"
                            style={{ color: 'black', width: '100px' }}

                          >
                            <i className="fa fa-key pr-2" onClick={openResetPopup}>Reset Password</i>
                          </a>
                        </div>
                        <div class="logout-btn">
                          <a
                            href="#/"
                          >
                            <i
                              onClick={() => handleLogOut()}
                              className="fas fa-sign-out-alt pr-2"
                            >
                              Logout
                            </i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
