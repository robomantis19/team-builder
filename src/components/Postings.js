import React from 'react'; 



 
    
function Postings(props) {
     
    function incoming(post){
        if(post==true){ 
            return {transform: `translateY(-100px)`}
        }else{
            return {transform: `translateY(100px)`}
        }
       
    }
 

    return (
        <div > 
            {props.posts.map((item, index) => { 

                return (
                    <div  style={incoming(item)} className="PostCards" key={item.id}>
                        <h2>{item.name}</h2>
                        <p> {item.email}</p> 
                        <p> {item.role}</p> 
                    </div> 
                )
            })}
        </div> 

    )
}
export default Postings; 