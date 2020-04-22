import React from 'react'

function Form(props) {
    // THESE ARE THE **EXACT PROPS** Form EXPECTS!
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return (
        <form className='team-member-container'>
            <h2>Team Member Form</h2>
            {/* //// TEXT INPUTS ////// */}
            <label>Name:&nbsp;
                <input
                // STEP 3A - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                // Inputs render what they're told
                // Their current value ultimately comes from app state
                // At each keystroke, a change handler should fire
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
            /></label>
            <label>Email:&nbsp;
                <input
                // STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'
            /></label>
            <label>Role:&nbsp;
                <input
                // STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
                value={values.role}
                onChange={onInputChange}
                name='role'
                type='text'
            /></label>

            {/* STEP 3C - THIS BUTTON WANTS A HANDLER */}
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
} 

export default Form