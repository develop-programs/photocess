import { SignUpForm } from '@/components/custom/auth/SignUpForm'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SignUp Page',
    description: 'Sign up for an account',
}

export default function page() {
    return (
        <div className='h-screen grid place-content-center'>
            <SignUpForm />
        </div>
    )
}