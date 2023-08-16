

import React from 'react'

const Form = () => {
    return (
        <>
            <form class="form">
                <input type="text" className="input" placeholder="Enter your name" required />
                <input type="text" className="input" placeholder="Enter your email" required />
                <input type="text " className="input" placeholder="Enter your subject" required />

                <button>Submit</button>

            </form>



        </>
    )
}

export default Form