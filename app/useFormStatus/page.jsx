"use client"
import React from 'react'
import { Submit } from './submit'
import { action } from './action'

const UseFormStatus = () => {
    return (
        <form action={action}>
            <Submit />
        </form>
    )
}

export default UseFormStatus