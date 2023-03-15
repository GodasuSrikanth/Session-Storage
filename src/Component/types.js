import React from 'react'
import { useEffect } from 'react'
export default function Types() {
     useEffect(() => {
        localStorage.setItem('name','Srikanth')
        console.log(localStorage.getItem('name'))
        sessionStorage.setItem('name','Srikanth')
        document.cookie = 'name=Tharun'
        })
          return (
            <div>
                 <h1>Hello</h1>
            </div>
        )
    }

    

    