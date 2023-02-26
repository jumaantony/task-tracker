import React from 'react'
import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
        <h1> Task Tracker</h1>
        <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

// how to write Css in React

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

// calling the CSS in the tag
// style={headingStyle}

export default Header
