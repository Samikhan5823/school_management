import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'
import Dashboard from '../SiderbarMenu/DashBoard/Dashboard'
import StudentCategory from '../SiderbarMenu/StudentPage/AttendancePage/Attendance'
import Finance from '../SiderbarMenu/Financepage/Finance'
import { AiOutlineHome } from 'react-icons/ai'
import { SiMicrosoftacademic } from 'react-icons/si'
import { TiArrowSortedDown } from 'react-icons/ti'
import { MdPlayArrow } from 'react-icons/md'


import { RiAdminLine } from 'react-icons/ri'
import { BsCollection } from 'react-icons/bs'
import Footer from '../layout/Footer'
import Topbar from './Topbar'
import { connect } from 'react-redux'
import Book from '../SiderbarMenu/Library/Book'
import BooksCategory from '../SiderbarMenu/Library/BooksCategory'
import Attendance from '../SiderbarMenu/StudentPage/AttendancePage/Attendance'
import Attendanceindex from '../SiderbarMenu/StudentPage/AttendancePage/Attendanceindex'
function DashboardLayout(props) {
    const accordionData = [
        {
            name: 'Dashboard',
            img: <AiOutlineHome />,
            subAcademic: [
                {
                    name: 'Dashboard',
                    path: '/',
                    component: <Dashboard />,

                },
            ]
        },
        {

            name: 'Library',
            img: <SiMicrosoftacademic />,

            subAcademic: [
                {

                    name: 'Books',
                    path: '/library/books',
                    component: <Book />,

                },
                {

                    name: 'BooksCategory',
                    path: '/library/booksCategory',
                    component: <BooksCategory />,

                },

            ],
        },
        {
            name: 'Students',
            img: <RiAdminLine />,


            subAcademic: [
                {
                    name: 'Attendance',
                    path: '/student/attendance',
                    component: <Attendanceindex />,

                },
              
            ],
        },
        {
            name: 'FinanceCat',
            img: <BsCollection />,
            subAcademic: [
                {
                    name: 'Finance',
                    path: 'financeCategory/finance',
                    component: <Finance />,
                }]
        },
    ]
    const [state, setState] = useState({
        activeMenuItem: 'Dashboard',
        openMenu: false,
        openSideBar: false,
        togle: false,
    })
    const [isActive, setIsActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const show = (a) => {
        setState((prevState) => ({
            ...prevState,
            openMenu: !prevState.openMenu,
        }))
    }

    const handler = (index) => {
        if (index === activeMenu) {
            return setActiveMenu(null)
        }
        setActiveMenu(index)
        setIsActive(!isActive)
    }

    const loginStore = props.loginStore;
    if (!loginStore.isLoggedin) {
        return <Navigate to="/login" replace />
    }
    return (
        <>
            <Topbar show={show} openMenu={state.openMenu} />

            <div
                // style={{ width: state.openMenu ? '15%' : '0%' }}
                className={state.openMenu ? 'sidebar' : 'sidebar-inactive'}
            >
                <h3 className="logo">VPS</h3>
                <div className="accordion "  >
                    {accordionData.map((title, index) => (
                        <div className="accordion-item " style={{ background: 'transparent' }}>

                            <div key={index} className="accordion-title d-flex justify-content-center  " style={{ fontSize: '22px', }} onClick={() => handler(index)}>
                                <div >
                                    <p className=' text-white' >
                                        <span className="sidebar-img text-white " > {title.img} </span>
                                        {title.name}
                                    </p>
                                </div>
                                <div className='text-white'>{activeMenu === index ? <TiArrowSortedDown /> : <MdPlayArrow />}

                                </div>
                            </div>
                            {activeMenu === index && <div className="accordion-content ">{
                                title.subAcademic && title.subAcademic.map((row, i) => {
                                    return (
                                        <div key={i} className='d-flex justify-content-center p-2' style={{ fontSize: '18px' }}>
                                            <span className="sidebar-img text-white" >
                                                {row.img}
                                                <Link className='text-white' to={row.path}>{row.name}</Link>

                                            </span>

                                        </div>)
                                })
                            }</div>}
                        </div>
                    ))}
                </div>

                {/* <ul className="menu">
                    <ul className="menu">
                        {menuItems.map((item, index) => {
                            //    if (item.subAcademic === undefined) return null
                            return (

                                <Link key={index} to={item.path}>
                                    <li className="d-flex justify-content-center" onClick={() => handleClick(index)}>
                                        <span className="sidebar-img" style={{ fontSize: '37px' }}>
                                            {item.img}
                                        </span>
                                        <a href="#">{item.name}</a>

                                        <ul >
                                            {state.openSideBar === index &&
                                                item.subAcademic?.map((row, i) => {
                                                    return (
                                                        <Link key={i} to={row.path}>
                                                            {state.openSideBar && state.togle ? (
                                                                <li className="d-flex justify-content-center" key={i}>
                                                                    <span className="sidebar-img" style={{ fontSize: '37px' }}>
                                                                        {row.img}
                                                                    </span>
                                                                    <a>{row.name}</a>
                                                                </li>
                                                            ) : (
                                                                ''
                                                            )}
                                                        </Link>
                                                    )
                                                })}
                                        </ul>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </ul> */}
            </div>
            <div
                className="main-content "
                // style={{ width: state.openMenu ? '85%' : '100%' }}
            >
                <div className="container-fluid ">
                    <Outlet />

                    {/* <Routes>
                            <Route path="/dashboard/timeTable" element={<TimeTable />} />
                            <Route path="/dashboard/student" element={<Student />} />
                            <Route path="/dashboard/finance" element={<Finance />} />

                            <Route
                                exact
                                path="/dashboard/studentCategory"
                                element={<StudentCategory />}
                            />
                        </Routes> */}

                </div>
            </div>
            <Footer />
        </>
    )
}



function mapStateToPropss(state) {
    return {
        loginStore: state.LoginReducer
    }
}




export default connect(mapStateToPropss, null)(DashboardLayout)

