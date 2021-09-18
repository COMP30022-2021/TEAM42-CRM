import React from 'react'

function Header({text,top_a}) {
    
    return (
        <div>
            <h2 style={{
            position: 'absolute', 
            left: '50%', 
            top: top_a,
            width: 476.15,
            height: 54.85,
            transform: 'translate(-50%, -50%)',
            }}>
                {text}
            </h2>
        </div>
    )
}

export default Header
