import React, { useState } from 'react';
// import logo from './logo.svg';
import Form from './components/Form'
import TeamMember from './components/TeamMember'
import './App.css';


const initialMemberslist = [
  // 👉 the shape of the actual friend object from API
  {
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'person'
  },
]


// the shape of the state that drives the form
const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMemberslist)

  // STEP 1 - WE NEED TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    // STEP 4 IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
    const name = evt.target.name // either 'name', 'email', or 'role'
    // b) pull the value of the input from the event object
    const value = evt.target.value // the current value of the input
    // c) set a new state for the whole form

    setFormValues({
      //copy over all the properties from formValues
      ...formValues,
      [name]: value, // <-- NOT AN ARRAY
    })

  }

  const onSubmit = evt => {
    // STEP 5 - IMPLEMENT A SUBMIT HANDLER

    // a) don't allow the browser to reload using .preventDefault()!
    evt.preventDefault()

    const newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
    // c) update the list of Team Members in state with the new Team Member
    setTeamMembers([ ...teamMembers, newMember ])
    // d) optionally clear the form
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header><h1>List o'Team Members</h1></header>
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember}/>
          )
        })
      }

      <Form
        // STEP 2 - FORM WANTS ITS FOOD!
        // check implementation of FriendForm
        // to see what props it expects
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
