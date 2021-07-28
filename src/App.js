import React, { useState } from  'react';



const App=()=>{

    let NewTime=new Date().toLocaleTimeString();
    const [ctime,setctime]=useState(NewTime);
    
     const UpDateTime=()=>{
         NewTime=new Date().toLocaleTimeString();
         setctime(NewTime);
      }
      setInterval(UpDateTime,1000)

    // let date=today.getHours+":"+today.getMinutes+":"+today.getSeconds;
    return(
        
      <>
     
      <h1>{ctime}</h1>
       {/* <button onClick={UpDateTime}>Get Time</button>   */}
      </>
    );
};
export default App;