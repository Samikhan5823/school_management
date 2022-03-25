 const sideBarData = [
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
        name: 'HR/Payroll',
        img: <BsCollection />,
        subChild: [
            {
                name: 'Emp-Management',
                subTab: [
                    {
                        name: 'Add-Department',
                        path: 'hr/payroll/emp-management/addepartment',
                        component: <AddDepartment />,
                    }
                ],
            },

        ]
    },
]
module.exports = {
    sideBarData: sideBarData,
}