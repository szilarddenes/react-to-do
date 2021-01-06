import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const styleHeader = {
        background: 'black',
        color: '#fff500 ',
        paddingTop: '0px',
        marginTop: '0px'
    }
    const linkStyle = {
        color: '#fff500 ',
        textDecoration: 'none'
    }


    return (
        <header style={styleHeader}>
            <h1> 🌶 Hey, buddy! do more. 🥦</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}


export default Header