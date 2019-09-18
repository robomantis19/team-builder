import React from 'react';


const Teams = (props) => { 
    console.log(props);

    return (
        <div>

            
                {props.teams.map(item => ( 
                
                        <div className = "teamCard" key={item.id}>
                          <h2>{item.team}</h2>
                          <p>{item.body}</p>
                          <p>{item.name}</p>
                          <p>{item.role}</p>
                          <p>{item.email}</p>
                        </div>
                    
                ))}
        </div>
            
      
       
    )
}
export default Teams;