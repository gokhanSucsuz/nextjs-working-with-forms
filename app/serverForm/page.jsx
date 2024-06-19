"use client"
import React, { useState } from 'react'
import { serverAction } from "./action"

const ServerForm = () => {
    const [isError, setIsError] = useState([])
    const [errorObj, setErrorObj] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        match: false
    })
    const handleAction = async (formData) => {
        const res = await serverAction(formData)
        // if (res) {
        //     setErrorObj(res)
        // } else {
        //     setErrorObj({})
        // }

        if (res) {
            setIsError(res)
        }
    }
    return (
        <div className='p-10'>
            <form className="max-w-sm mx-auto p-10 border shadow-lg rounded-lg" action={handleAction}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                    <p className={errorObj.email ? `flex bg-red-500 text-center text-white p-2 m-3 border rounded-lg shadow-lg text-sm` : `hidden`}>Please enter data in correct format</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input name='password' type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    <p className={errorObj.password ? `flex bg-red-500 text-center text-white p-2 m-3 border rounded-lg shadow-lg text-sm` : `hidden`}>Please enter data in correct format</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input name='repeatPassword' type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    <p className={errorObj.repeatPassword ? `flex bg-red-500 text-center text-white p-2 m-3 border rounded-lg shadow-lg text-sm` : `hidden`}>Please enter data in correct format</p>
                    <p className={errorObj.match ? `flex bg-red-500 text-center text-white p-2 m-3 border rounded-lg shadow-lg text-sm` : `hidden`}>Your password doesnt match!</p>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input name='terms' id="terms" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
            <ul>
                {
                    isError.map((error, index) => <li key={index}>
                        {error.message}
                    </li>)
                }
            </ul>

        </div>
    )
}

export default ServerForm