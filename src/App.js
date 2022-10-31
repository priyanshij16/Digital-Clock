import React, { useState } from "react";

//let newtime= new Date.toLocaleTimeString();
const App = () =>
{
  let newtime= new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(); 
  
  const UpdateTime =() =>{
   let newtime= new Date().toLocaleTimeString(); 
    setCtime (newtime);
  };
   return(
     <>
      <h1> {ctime} </h1>
      <button onClick={UpdateTime}> get time</button>
     </>
   );
};
export default App;
