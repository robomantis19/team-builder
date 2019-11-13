import React, {useState} from 'react'; 


function Jobs(props){
    console.log("props", props)
    const [job, setJob] = useState({jobs: " ", body:  " "}); 


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
            <form onSubmit={submitForm}>
                <label htmlFor="jobs">Jobs</label>
                <input 
                id="jobs" 
                type='text'
                name='jobs'
                onChange={work}
                value = {job.jobs}
                ></input>
                
                {/* <lable htmlFor="jobs"></lable> */}
                <textarea id="jobs" name="body" value={job.body}  onChange={work}></textarea>
                <button type="submit">Add Note</button>
            </form>
            {/* <div style={{marginTop: `50px`}}>{job.jobs}</div>
            <div style={{marginTop: `50px`}}>{job.body}</div> */}
        </div>
    )
}

export default Jobs; 