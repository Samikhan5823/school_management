import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Dashboard from '../../SiderbarMenu/DashBoard/Dashboard'
import { AiOutlineHome } from 'react-icons/ai'
import { SiMicrosoftacademic } from 'react-icons/si'
import { TiArrowSortedDown } from 'react-icons/ti'
import { MdPlayArrow } from 'react-icons/md'
import { RiAdminLine } from 'react-icons/ri'
import { BsCollection } from 'react-icons/bs'
import Footer from '../footer/Footer'
import Topbar from '../topbar/Topbar'
import { connect } from 'react-redux'
import Book from '../../SiderbarMenu/Library/Book'
import BooksCategory from '../../SiderbarMenu/Library/BooksCategory'
import Attendanceindex from '../../SiderbarMenu/StudentPage/AttendancePage/Attendanceindex'
import EmpManagement from '../../SiderbarMenu/Financepage/EmpManagement'
function DashboardLayout(props) {
    const accordionData = [
        {
            name: 'Dashboard',
            img: <AiOutlineHome />,
            subChild: [
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
            subChild: [
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
            subChild: [
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
            subChild: [
                {
                    name: 'Finance',
                    subTab: [
                        {
                            name: 'Emp Management',
                            path: 'financeCategory/empmanagement',
                            component: <EmpManagement />,
                        }
                    ],
                },

            ]
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
    const [activeSubMenu, setActiveSubMenu] = useState(null);


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
    const handleSubTab = (i) => {

        console.log('hhhhh', i);
        if (i === activeSubMenu) {
            return setActiveSubMenu(null)
        }
        setActiveSubMenu(i)
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
                                <div className='text-white'>{activeMenu === index ? <TiArrowSortedDown /> : <MdPlayArrow />}</div>
                            </div>
                            {activeMenu === index && <div className="accordion-content ">{
                                title.subChild && title.subChild.map((row, i) => {
                                    console.log('rowss', row)
                                    return (
                                        <div className="accordion-item " style={{ background: 'transparent' }}>

                                            <div key={i} className=' d-flex justify-content-center  accordion-title p-2' style={{ fontSize: '18px' }} onClick={() => handleSubTab(i)}>
                                                <span className="d-flex sidebar-img text-white " >
                                                    {row.img}
                                                    {row.subTab ? <span className=' text-white'>{row.name} </span> : <Link className='text-white' to={row.path}>{row.name}</Link>
                                                    } {row.subTab && <div className='text-white'>{activeSubMenu === i ? <TiArrowSortedDown /> : <MdPlayArrow />}</div>}
                                                </span>
                                            </div>
                                            {activeSubMenu === i && <div className="accordion-content  d-flex justify-content-center">
                                                {row.subTab && row.subTab.map((ele, ind) => {
                                                    return <div key={ind} className='p-2' style={{ fontSize: '18px' }} onClick={(e) => e.stopPropagation()}>
                                                        {/* {ele.img} */}
                                                        <span className=" text-white" >
                                                            <Link className='text-white' to={ele.path}>{ele.name}</Link>
                                                        </span>

                                                    </div>

                                                })}
                                            </div>
                                            }
                                        </div>
                                    )
                                })
                            }</div>}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="main-content "
            >
                <div className="container-fluid ">
                    <Outlet />
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

