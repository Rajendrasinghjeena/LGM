import './App.css';
import React, {useState} from 'react';

function App() {
  let [data,setdata]=useState([]);
  function getData(){
    fetch(`https://reqres.in/api/users?page=1`)
       .then((Response)=>Response.json())
       .then((userdata)=>{
         console.log(userdata);
        setdata(userdata.data);
       })
       .catch((Error)=>{
         console.log( Error);
       })
  };
 return (
    <div className="App">
      

      <nav className="navv">
         <ul className="menu">
             <li><a className="nav_items" href=" "> LetsGrowMore</a></li>
            
             <button className='btn' onClick={getData}>Get Users</button>
         </ul>
     </nav>

    <div>
       {
           data.map((data)=>{
                  return(
                    <div className="cards">
                    <div className="article">
                       <img  className="img1"
                       src={data.avatar} alt="tech"/>
                      <div className="details">
                          <h3 className="author">ID: {data.id}</h3>
                          <h3 className="author">EMAIL: {data.email}</h3>
                          <h3 className="author">Name: {data.first_name} {data.Last_name}</h3>
                      </div>
                    </div>
                    
                          </div>
                  )
                })}
                </div>
                </div>
    );}
export default App;

