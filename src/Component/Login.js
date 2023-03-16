import React, {useRef} from "react";
import Home from "./home";
import './Login.css';


function Login(){
    const email=useRef()
    const password=useRef()
    const getEmail=sessionStorage.getItem("emailData")
    const getPassword=sessionStorage.getItem("passwordData")

    const handleSubmit=()=>{
        if (email.current.value==="srikanth@gmail.com" && password.current.value==="112233"){
            sessionStorage.setItem("emailData","srikanth@gmail.com")
            sessionStorage.setItem("passwordData","112233")
        }
    }

    return(


        <div>
            {
                getEmail&&getPassword?
                <Home/>:
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h1>Login Page</h1>
                    <label>Email</label>
                    <br/>
                    <input type="text" placeholder="Enter mail..."  className="form-control" ref={email}/>
                </div><br/>

                <div className="form-group">
                    <label>Password</label><br/>
                    <input type="password" placeholder="Enter password..." className="form-control" ref={password}/>
                </div>
                <br/>
                <button>Login</button>

            </form>
            }
        </div>
        
        
    );
}
export default Login;
