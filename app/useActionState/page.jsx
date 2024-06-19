"use client"
import { useFormState } from "react-dom"
import React, { useActionState, useState } from 'react'
import { increment } from './action'

const UseActionState = () => {
    const [state, formAction] = useFormState(increment, 0);
    const [email, setEmail] = useState({ email: "" })
    const [isState, setIsState] = useState(false)
    const handleClick = () => {
        setIsState(true)
        setTimeout(() => {
            setIsState(false)
        }, 3000)
    }
    return (
        <form action={formAction} className="flex flex-col w-1/12 ms-10 gap-4  items-center">
            {state}
            <input onChange={(e) => setEmail({ email: e.target.value })} value={email.email} name='email' type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button onClick={handleClick} className="p-3 bg-red-500 text-white rounded-lg">Increment</button>
            {isState && email.email}
        </form>
    );
}

export default UseActionState