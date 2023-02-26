import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd }) => {

    return (
        <header className='header'>
        <h1> Task Tracker</h1>
        <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
        />
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
