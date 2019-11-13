import React from 'react'; 



function Postings(props) {
     


    return (
        <div> 
            {props.posts.map((item, index) => { 
                return (
                    <div className="PostCards" key={item.id}>
                        <h2>{item.jobs}</h2>
                        <p> {item.body}</p> 
                    </div> 
                )
            })}
        </div> 

    )
}
export default Postings; 