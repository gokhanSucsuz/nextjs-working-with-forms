"use client"
import React, { useEffect, useState } from 'react'
import { z } from 'zod'

const formSchedule = z.object({
    email: z.string().email("Email must be valid!"),
    password: z.string().min(5, "Password must be at least 5 character!"),
    rePassword: z.string().min(5, "Password must be at least 5 character!")
}).refine(data => data.password === data.rePassword, {
    message: "Passwords don't match!"
})

const ZodClient = () => {
    const [isError, setIsError] = useState([])
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rePassword: "",
        remember: false

    })

    const handleAction = (e) => {
        e.preventDefault()
        try {
            formSchedule.parse(formData)
            setIsError([])
        } catch (error) {
            setIsError(error.errors)
        }
    }
    return (
        <div className="p-10">
            <form className="max-w-sm mx-auto p-10 border shadow-lg rounded-lg" onSubmit={handleAction}>
                <h1 className='pb-5 text-xl font-bold text-center text-green-600'>Zod Package Validation Client</h1>
                <div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            value={formData.email} name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} name='password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={(e) => setFormData({ ...formData, rePassword: e.target.value })} value={formData.rePassword} name='rePassword' type="password" id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input onChange={(e) => setFormData({ ...formData, remember: !formData.remember })} checked={formData.remember} name='remember' id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
                <ul className='w-full text-red-500 pt-5 '>
                    {
                        isError.length ? isError.map((error, index) =>
                            <li key={index}>{error.message}</li>
                        ) : ""
                    }
                </ul>
            </form>
        </div>
    )
}

export default ZodClient