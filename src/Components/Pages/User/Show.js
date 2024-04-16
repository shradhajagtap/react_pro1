import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [user, setUser] = useState([])

    async function fetchData() {
        const result = await axios.get('http://localhost:5000/user')
        setUser(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2 className='text-center'><u> Show Information...... </u></h2>
            <table className=" container table table-striped">
                <thead>
                    <tr>
                        <th>Hostel Name</th>
                        <th>Hostel rent</th>
                        <th>Hostel Address</th>
                        <th colspan='2' className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((obj) => {
                            return (
                                <tr>
                                    <td>{obj.name}</td>
                                    <td>{obj.rent}</td>
                                    <td>{obj.add}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className="btn btn-success">Update</button></NavLink>
                                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-warning float-end'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )    
}

export default Show