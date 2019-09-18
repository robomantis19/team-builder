import React, { useState } from "react";

const TeamForm = props => { 
    console.log('props', props);
    const [myteam, setMyTeam] = useState({team:"", body: "", name: "", email: ""})

    const handleChanges = event => {
        //console.log(event.target.value);
        // setmyTeam({myteam: event.target.value })
        // console.log(myteam);
        setMyTeam({...myteam, [event.target.name]:event.target.value})
        console.log(myteam);
    }

      const submitForm = e => { 
          e.preventDefault();
          props.addNewTeamMember(myteam);
          setMyTeam({team: "", body:"", name: "", email:""})
          console.log(e.target.value);
      }
      return (


        <form onSubmit={submitForm}>
            <label htmlFor="team">TEAMS</label>
            <input 
            id="team" 
            type="text" 
            name="team" 
            onChange={handleChanges}
            value={myteam.team}/>
            
            <label htmlFor="theName">Name</label>
            <input 
            id="nameid" 
            type="text" 
            name="name" 
            onChange={handleChanges}
            value={myteam.name}/>

            <label htmlFor="theName">Role</label>
            <input 
            id="roleid" 
            type="text" 
            name="role" 
            onChange={handleChanges}
            value={myteam.role}/>
            
            <label htmlFor="email">email</label>
            <input 
            id="emailid" 
            type="text" 
            name="email" 
            onChange={handleChanges}
            value={myteam.email}/>


            <label htmlFor="Description">Description</label>      
            <textarea 
            id="descriptionid" 
            name = "body" 
            onChange={handleChanges}
            value= {myteam.body}

            />
            <button type = "submit"> Add Team </button>
        </form>
      )



}

export default TeamForm;