import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm'
import Teams from './components/Team'

function App() {
  const [myteam, setMyTeam] = useState([
      {
        id: 1,
        team: "Cool.io",
        name: 'Dortha',
        role: 'Ceo', 
        email: "ganderMany@gmail.com",
        body: "Cool.io has been searching and finding the coolest content in web programming and bringing it to the main stream."

      }
  ])
  
  const addNewTeamMember = team => { 
    const newTeam = {
      id: Date.now(), 
      team: team.team,
      name: team.name, 
      role: team.role, 
      email: team.email,
      body: team.body
    };
    setMyTeam([...myteam, newTeam])

  };


  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <TeamForm addNewTeamMember={addNewTeamMember}/>
        
        <Teams teams={myteam}/> 
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
