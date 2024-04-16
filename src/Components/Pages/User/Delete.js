import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const { userId } = useParams()

    const [user, setUser] = useState({})

    const navi = useNavigate()

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/user/${userId}`)
        console.log(result.data)
        setUser(result.data)
    }

    function deleteUser() {
        axios.delete(`http://localhost:5000/user/${userId}`)
        navi('/show')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <center><u> <h1> Delete </h1></u>
                <div className='container mt-5'>
                    <h3>Do you want to delete <span style={{ 'color': 'red' }}>  {user.name} </span>this record</h3>
                    <button onClick={() => deleteUser()} className='btn btn-outline-danger col-3'>Yes</button>
                    <NavLink to='/show'><button className='btn btn-outline-warning col-3'>No</button></NavLink>
                </div>

            </center>
        </>
    )
}

export default Delete