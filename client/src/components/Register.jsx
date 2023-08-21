import {useState} from 'react';
import axios from "axios";


export default function Register() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        name: "",
        surname:"", //add other fields here - then inputs for each of these
      });
      const { username, password, name, surname } = credentials;
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      };
      const register = async () => {
        try {
          //fetch request to login endpoint using axios
          const { data } = await axios("/api/auth/register", { //axios & pass url
            //axios means i don't need to use stringify or .json or results
            method: "POST",
            data: credentials,
          });
          //use navigate hook
          //redirect user to log in
          //don't need token bit
          //store it locally
          localStorage.setItem("token", data.token);
          console.log(data.message, data.token);
          setData(data.message);
        } catch (error) {
          console.log(error);
          setData(error.message);
        }
      };
      
      return (
        <div className=" login container">
            <h3>Register</h3>
        <div className="row mt-3">
        <div className="col">
        <label> Username/ Email address: </label>
        <input
        ></input>
        </div>
        
        <div className="col">
       <label>Password: </label>
       <input
       ></input>
        

      
       
       </div>
       </div>
       <div className="row mt-3">
        <div className="col">
        <label> Name: </label>
        <input
        ></input>
        </div>
        
        <div className="col">
       <label> Surname: </label>
       <input
       ></input>
        

      
       
       </div>
       </div>
        <div className= "row mt-3">
       <div className="p-15">
       <button className="btn btn-dark"> Sign Up! </button>

       
       </div>
       </div>
       
    

       
      

</div>
    )
      
      
      //not sure if this is correct for registration
      //do I need a request data function - no
      //also do I need a hash part anywhere?
    }