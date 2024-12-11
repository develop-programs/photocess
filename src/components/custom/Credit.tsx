"use client";
import React from 'react'
import { useSelector } from 'react-redux';
import Upgrade from './upgrade';

export default function Credit() {
    const data = useSelector((state: any) => state.auth);
    if (data.loading == true || data.subscription == null) return null
    if (data.loading == false && data.error == null) return (
        <div className='flex items-center gap-2'>
            {data.subscription.plan.toLowerCase() === 'free' ? <Upgrade /> : null}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" className='size-6' viewBox="0 0 24 25" fill="none">
                <path d="M13 9.5H7M21 14.55C21.56 14.53 22 14.08 22 13.53V11.47C22 10.92 21.56 10.47 21 10.45M21 14.55H19.04C17.96 14.55 16.97 13.76 16.88 12.68C16.82 12.05 17.06 11.46 17.48 11.05C17.85 10.67 18.36 10.45 18.92 10.45H21M21 14.55L21 16C21 19 19 21 16 21H7C4 21 2 19 2 16V9C2 6.28 3.64 4.38 6.19 4.06C6.45 4.02 6.72 4 7 4H16C16.26 4 16.51 4.00999 16.75 4.04999C19.33 4.34999 21 6.26 21 9L21 10.45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{data.subscription.credit === 0 ? 0 : data.subscription.credit}/400</span>
        </div>
    )
}
