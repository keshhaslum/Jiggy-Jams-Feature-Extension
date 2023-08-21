import {useState} from 'react';
import axios from "axios"; //axios is a library to do fetch requests



export default function Login() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });
    
      const [data, setData] = useState(null);
    
      const { username, password } = credentials;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      };
    
      const login = async () => {
        try {
          //fetch request to login endpoint using axios 
          const { data } = await axios("/api/auth/login", { //axios & pass url
            //axios means i don't need to use stringify or .json or results
            method: "POST",
            data: credentials,
          });
    
          //store it locally
          localStorage.setItem("token", data.token);
          console.log(data.message, data.token);
          setData(data.message);
        } catch (error) {
          console.log(error);
          setData(error.message);
        }
      };


      const logout = () => {
        //remove token from local storage
          localStorage.removeItem("token");
          setData(null);
        };
      
      
        const requestData = async () => {
          //send a request to the protected endpoint
          try {
            const { data } = await axios("/api/auth/profile", {
              //attach the bearer token as an authorization header
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            });
            setData(data.message);
            console.log(data.message);
          } catch (error) {
            console.log(error);
            setData(error.message);
          }
        };
      


    return (
        <div className=" login container">
            <h3>Log in</h3>
        <div className="row mt-3">
        <div className="col">
        <label> Username/ Email address: </label>
        <input
         value={username}
         onChange={handleChange}
         name="username"
         type="text"
        ></input>
        </div>
        
        <div className="col">
       <label>Password: </label>
       <input
       value={password}
       onChange={handleChange}
       name="password"
       type="password"
       ></input>
       </div>
       </div>
        
        <div className= "row mt-3">
       <div className="p-15">
       <button className="btn btn-dark" onClick={login}> Log in </button>

       <div className="p-15">
       <button className="btn btn-dark"onClick={logout}> Log out </button>
       
       <div className="p-15">
       <button className="btn btn-dark"onClick={requestData}> Request protected data </button>
       
       </div>
       </div>
       
       </div>
       </div>
      
       {data && (
        <div className="text-center p-4">
          <div className="alert">{data}</div>
        </div>
    
      )}

       
      

</div>
    )
    
    };