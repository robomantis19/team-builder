import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './components/Jobs.js';
import Postings from './components/Postings.js'; 
function App() {
  const [posts, setPosts] = useState([
    {id: 1, 
    jobs: "Dirty Jobs Done Just Right", 
    body: "People around the world doing the dirtiest jobs, now its Mike Rowes Turn"
    }])

    const addNewPost = (input) => { 
      const addPost =  { 
        id: Date.now(), 
        jobs: input.jobs, 
        body: input.body

      }
      setPosts([...posts, addPost])
    }
   
  return (
    <div className="App">
      
        
       
      <Jobs addNewPost={addNewPost}/>
        <Postings posts={posts}/> 
         
      
    </div>
  );
}

export default App;
