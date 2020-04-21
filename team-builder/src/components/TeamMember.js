import React from 'react'

function TeamMember({ details }) {
    if (!details) {
        return <h3>Working on fetching your Team Member&apos;s details..</h3>
    }
    return (
        <div className='team-member-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default TeamMember