import React, { useState } from 'react'

const Crud = () => {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [age, setAge] = useState('')
    // const [dept, setDept] = useState('')
    // const [edit, setEdit] = useState(false)

    // const [allEmp, setAllEmp] = useState([])

    // const handleChange = (e, name) => {
    //     console.log('name', name);
    //     if (e.target.name === 'firstName') {
    //         setFirstName(e.target.value)

    //     } else if (e.target.name === 'lastName') {
    //         setLastName(e.target.value)

    //     }
    //     else if (e.target.name === 'age') {
    //         setAge(e.target.value)

    //     }
    //     else if (e.target.name === 'dept') {
    //         setDept(e.target.value)

    //     }

    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setAllEmp([...allEmp, { firstName, lastName, age, dept, id: allEmp.length }])
    //     setFirstName('')
    //     setLastName('')
    //     setAge('')
    //     setDept('')
    // };
    // const handleAllDelete = () => {

    //     setAllEmp([])

    // };


    // const handleDelete = (id) => {
    //     let ab = [...allEmp]
    //     return setAllEmp(ab.filter((row) => row.id !== id))
    // };
    // const handleEdit = (row) => {
    //     setEdit(true)
    //     console.log();
    //     setFirstName(row.firstName)
    //     setLastName(row.lastName)
    //     setAge(row.age)
    //     setDept(row.dept)
    // }
    // const handleUpdate = (el) => {

    //     let obj = allEmp.map((row) => {
    //         if (row.id === el.id) {
    //             return { firstName, lastName, age, dept, id: el.id }
    //         } else {
    //             return row
    //         }
    //     })
    //     setAllEmp(obj)
    // }

    // console.log('allemp', allEmp);

    const carName = [
        { carName: 'please select' },
        { carName: 'corola' },
        { carName: 'honda' },
        { carName: 'suzuki' },

    ]
    const carModal = [
        { carModal: 'please select' },
        { carModal: 'corola Xli', category: 'corola' },
        { carModal: 'corola gli', category: 'corola' },
        { carModal: 'honda civic', category: 'honda' },
        { carModal: 'handa city', category: 'honda' },
        { carModal: 'suzuki mehran', category: 'suzuki' },
        { carModal: 'suzuki alto', category: 'suzuki' },


    ]
    const [cardata, setcardata] = useState({
        carNames: '',
        carmodals: ''
    })
    const [filteredData, setFilteredData] = useState(carModal)




    const handleChange = (e) => {
        let { name, value } = e.target

        if (value === 'please select') {
            setFilteredData(carModal)
        } else {
            let c = [];
            carModal.map((el) => {
                if (el.category === value) {
                    c.push(el)
                }
            })
            setFilteredData(c)
        }


        setcardata({
            [name]: value,
        })
        console.log('e', e.target.value);
    }




    const { carNames, carmodals } = cardata
    return (
        <div className='container'>
            <div className='row mt-5 '>
                <div className='col-4 '>
                    <select name='carNames' value={carNames} onChange={(e) => handleChange(e)}>
                        {carName.map((row) => {
                            return <option>{row.carName}</option>
                        })}

                    </select>

                </div>
                <div className='col-4'>
                    <select name='carmodals' value={carmodals} onChange={(e) => handleChange(e)}>
                        {filteredData.map((row) => {
                            return <option>{row.carModal}</option>
                        })}
                    </select>

                </div>

            </div>
        </div>
        // <div className='container'>
        //     {/* <h2>Crud</h2> */}
        //     <div className='row'>
        //         <div className='col-2'>
        //             <label>First Name</label>
        //             <input type='text' name='firstName' autoComplete='off' value={firstName} onChange={(e) => handleChange(e, 'firstName')} />
        //         </div>
        //         <div className='col-2'>
        //             <label>Last Name</label>
        //             <input type='text' name='lastName' autoComplete='off' value={lastName} onChange={(e) => handleChange(e, 'lastName')} />
        //         </div>
        //         <div className='col-2'>
        //             <label>Age</label>
        //             <input type='number' name='age' autoComplete='off' value={age} onChange={(e) => handleChange(e, 'age')} />
        //         </div>
        //         <div className='col-2'>
        //             <label>Department</label>
        //             <input type='text' name='dept' autoComplete='off' value={dept} onChange={(e) => handleChange(e, 'dept')} />
        //         </div>
        //         <div className='col-2 mt-4'>
        //             <button onClick={handleSubmit}>Submit</button>
        //             <button onClick={handleAllDelete}>All delete</button>


        //         </div>

        //     </div>

        //     <div className=''>
        //         {allEmp.map((el, index) => {
        //             return (
        //                 <div key={index}>
        //                     <ul>
        //                         <li>{`FirstName=${el.firstName}`}</li>
        //                         <li>{`LastName=${el.lastName}`}</li>
        //                         <li>{`Age=${el.age}`}</li>
        //                         <li>{`Department=${el.dept}`}</li>

        //                     </ul>
        //                     <button onClick={() => handleDelete(el.id)}>Delete</button>

        //                     {edit ? <button onClick={() => handleUpdate(el)}>Update</button> : <button onClick={() => handleEdit(el)}>Edit</button>}




        //                 </div>
        //             )

        //         }

        //         )

        //         }

        //     </div >
        // </div >

    )
}

export default Crud

