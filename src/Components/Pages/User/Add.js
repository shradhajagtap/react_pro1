import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'


function Add() {
    const navi = useNavigate()

    const { register, handleSubmit } = useForm()

    function saveData(data) {
        axios.post('  http://localhost:5000/user', data)
        alert('Added')
        navi('/show')

    }

    return (
        <>
            <div className=" container border border-info mt-3 p-3">
                <center><b>Hostel</b></center>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='n'> Hostel Name : </label>
                    <input type='text' id='n' className='form-control' {...register('name')} />

                    <label htmlFor='r'> Hostel rent : </label>
                    <input type='number' id='r' className='form-control' {...register('rent')} />

                    <label htmlFor='add'> Hostel Address : </label>
                    <input type='text' id='add' className='form-control' {...register('add')} />

                    <input type='submit' value={'Submit'} className='mt-2' />
                    <input type='reset' value={'Reset'} className='float-end mt-2' />
                </form>

            </div>
        </>
    )
}

export default Add