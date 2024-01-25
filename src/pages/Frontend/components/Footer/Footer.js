import React, { useState } from 'react'
import dayjs from 'dayjs'

export default function Footer() {

    const year = new Date().getFullYear()

  return (
    <>
    <div className='bg-white text-center shadow'>
        <div className="container">
            <p className='pt-3 fw-bold'>
             &copy;{year}. All Rights Reserved
            </p>
        </div>
    </div>
    </>
  )
}
