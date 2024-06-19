"use client"
import React, { useState } from 'react'
import { fileAction } from './fileAction'

const File = () => {
    const [fileName, setFileName] = useState("")
    const handleAction = async (formData) => {
        const res = await fileAction(formData)
        setFileName(res)
        setTimeout(() => {
            setFileName("")
        }, 3000)
    }
    return (
        <div className='p-10'>
            <form className="max-w-sm mx-auto p-10 border shadow-lg rounded-lg" action={handleAction}>
                <div className="mb-5">
                    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input name='file' type="file" id="file" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                </div>
                <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    Upload File
                </button>
                {
                    fileName ? <div className='p-3 bg-purple-300 text-white font-bold my-3 rounded-lg'>File "{fileName}" is loaded...</div> : ""
                }
            </form>
        </div>
    )
}

export default File