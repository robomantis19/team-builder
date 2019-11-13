import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './components/Jobs.js';
import Postings from './components/Postings.js'; 
function App() {
  const [posts, setPosts] = useState([
    {id: 1, 
    name: "Mr.Conely", 
    email: "fa41@conely.com",
    role: "Front End Engineer"
    }])

    const addNewPost = (input) => { 
      const addPost =  { 
        id: Date.now(), 
        name: input.name, 
        email: input.email,
        role: input.role

      }
      setPosts([...posts, addPost])
    }
   
  return (
    <div style={{display: `flex`, flexDirection: `column`, height: `100vh`, width: `100%`, backgroundColor: `grey`, paddingTop: `200px`}} className="App">
      
        
       
      <Jobs addNewPost={addNewPost}/>
        <Postings posts={posts}/> 
         
      
    </div>
  );
}

export default App;
