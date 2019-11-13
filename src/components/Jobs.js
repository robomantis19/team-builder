import React, {useState} from 'react'; 


function Jobs(props){
    console.log("props", props)
    const [job, setJob] = useState({name: " ", email:  " ", role: " "}); 


    const work = (e) => {

    setJob({...job, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => { 
        e.preventDefault()
        props.addNewPost(job)
        console.log("onsubmit", job)
    }
    
    return (
        <div style={{marginTop: `10px`}}>
            <form style={{display: `flex`, flexDirection: `column`, alignItems:  `center`, width: `25%`}} onSubmit={submitForm}>
                <label htmlFor="jobs">Name</label>
                <input 
                id="jobs" 
                type='text'
                name='name'
                onChange={work}
                value = {job.jobs}
                ></input>
                <label htmlFor="jobs">Email</label>
                <input 
                id="jobs" 
                type='text'
                name='email'
                onChange={work}
                value = {job.email}
                ></input>
                
                <label htmlFor="jobs">Role</label>
                <textarea id="jobs" name="role" value={job.body}  onChange={work}></textarea>
                <button type="submit">Add Note</button>
            </form>
            {/* <div style={{marginTop: `50px`}}>{job.jobs}</div>
            <div style={{marginTop: `50px`}}>{job.body}</div> */}
        </div>
    )
}

export default Jobs; 