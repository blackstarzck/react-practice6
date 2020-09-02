import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

// mobile에서만 보여진다.
export function Button(){
    return(
        <Link to="sign-up">
            <button className="btn">Sign Up</button>
        </Link>
    )
}