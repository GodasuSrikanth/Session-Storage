import React from "react";

function Home(){
    const handleClick=()=>{
        sessionStorage.clear();
        window.location.reload();
    }
    
    return(
        <>
        <h1>Welcome to Home Page</h1>
        <button onClick={handleClick}>Logout</button>
        </>
    )
}

export default Home;
