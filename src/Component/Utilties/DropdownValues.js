//==============Attendance Dropdown==============
const Courses = [
    { value: "", display: "Please Select" },
    { value: "nursery", display: "Nursery" },
    { value: "prep", display: "Prep" },
    { value: "one", display: "One" },
    { value: "two", display: "Two" },
    { value: "three", display: "Three" },
    { value: "four", display: "Four" },
    { value: "five", display: "Five" },
    { value: "six", display: "Six" },
    { value: "seven", display: "Seven" },
    { value: "eight", display: "Eight" },
    { value: "nine", display: "Nine" },
    { value: "ten", display: "Ten" },

]
const Batch = [
    { value: "", display: "Please Select" },
    { value: "a", display: "A" },
    { value: "b", display: "B" },
    { value: "c", display: "C" },
    { value: "d", display: "D" },

]
// =============Attendance View==============
const Month = [
    { value: "", display: "Please Select" },
    { value: 'january', display: 'January' },
    { value: 'february', display: 'February' },
    { value: 'march', display: 'March' },
    { value: 'april', display: 'April' },
    { value: 'may', display: 'May' },
    { value: 'june', display: 'June' },
    { value: 'july', display: 'July' },
    { value: 'august', display: 'August' },
    { value: 'september', display: 'September' },
    { value: 'october', display: 'October' },
    { value: 'november', display: 'November' },
    { value: ' december', display: 'December' },



]
const Year = [
    { value: "", display: "Please Select" },
    { value: 1, display: 2015 },
    { value: 2, display: 2016 },
    { value: 3, display: 2017 },
    { value: 4, display: 2018 },
    { value: 5, display: 2018 },
    { value: 6, display: 2019 },
    { value: 7, display: 2020 },


]
const AttendanceviewCol = [
    { Header: 'Student Name.', accessor: 'student name', },
    { Header: '01', accessor: '01', },
    { Header: '02', accessor: '02', },
    { Header: '03', accessor: '03', },
    { Header: '04', accessor: '04', },
    { Header: '05', accessor: '05', },
    { Header: '06', accessor: '06', },
    { Header: '07', accessor: '07', },
    { Header: '08', accessor: '08', },
    { Header: '09', accessor: '09', },
    { Header: '10', accessor: '10', },
    { Header: '11', accessor: '11', },
    { Header: '12', accessor: '12', },
    { Header: '13', accessor: '13', },
    { Header: '14', accessor: '14', },
    { Header: '15', accessor: '15', },
    { Header: '16', accessor: '16', },
    { Header: '17', accessor: '17', },
    { Header: '18', accessor: '18', },
    { Header: '19', accessor: '19', },
    { Header: '20', accessor: '20', },
    { Header: '21', accessor: '21', },
    { Header: '22', accessor: '22', },
    { Header: '23', accessor: '23', },
    { Header: '24', accessor: '24', },
    { Header: '25', accessor: '25', },
    { Header: '26', accessor: '26', },
    { Header: '27', accessor: '27', },
    { Header: '28', accessor: '28', },
    { Header: '29', accessor: '29', },
    { Header: '30', accessor: '30', },
    { Header: '31', accessor: '31', },



]
module.exports = {
    Courses: Courses,
    Batch: Batch,
    Year: Year,
    Month: Month,
    AttendanceviewCol: AttendanceviewCol
}