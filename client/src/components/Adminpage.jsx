import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Adminpage() {
  const initialJamState= {name: "", description: "", ingredients: "", quantity: "", price: "", size: ""};
  const [allJams, setAllJams] = useState([]);
  const [newJam, setNewJam] = useState(initialJamState);

  useEffect(() => {
    //getjams
    getAllJams();
  }, []);

  const getAllJams = () => {
    fetch("/api/products") 
    .then(response => response.json())
    .then(jams => {
      setAllJams(jams);
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewJam((prevState) => ({...prevState, [name]: value}))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addJam();
    setNewJam(initialJamState);
  };

  const addJam = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON. stringify({ name: newJam.name, description: newJam.description, ingredients: newJam.ingredients, quantity: newJam.quantity, price: newJam.price, size: newJam.size, image: newJam.image}),
      });
      const data= await response.json();
      setAllJams(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteJam = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
       method: "DELETE", 
      });
      const data = await response.json();
      setAllJams(data);
       } catch (error) {
      console.error(error);
    }
  };


  return (
  <div className="container mt-2">
    <h3>Admin Page</h3>
    <div className="row">
        {allJams.map((jam) => (
          <div className="col-3 p-4" key={jam.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={jam.image} className="card-img-top rounded" />
              <div className="card-body">
                <p className="card-text">{jam.name}</p>
                <p className="card-text">{jam.description}</p>
                <p className="card-text">Ingredients: {jam.ingredients}</p>
                <p className="card-text">Quantity: {jam.quantity}</p>
                <p className="card-text">£ {jam.price}</p>
                <p className="card-text">{jam.size} grams</p>
              </div>
            </div>
            <div onClick={() => deleteJam(jam.id)}>
              <button className="btn btn-dark">Delete Jam</button></div>
            </div>
            
    ))}

<div className="admin container mt-2">
<form className="mt-5" onSubmit={e => handleSubmit(e)}>

<div className="row mt-3">
<div className="col">
  <label> Name: </label>
  <div className="row m-3">
  <input
     name= "name"
     value={newJam.name}
     onChange={e => handleChange(e)}/>
     </div></div>

  <div className="col">
  <label>Description: </label>
  <div className="row m-3">
  <input 
      name= "description"
      value={newJam.description}
      onChange={e => handleChange(e)} />
      </div></div>

  <div className="col">
  <label>Ingredients: </label>
  <div className="row m-3">
  <input 
      name="ingredients"
      value={newJam.ingredients}
      onChange={e => handleChange(e)}/>
      </div></div>
      </div>

  <div className="row mt-3">
  <div className="col">
  <label>Quantity: </label>
  <div className="row m-3">
  <input 
      name="quantity"
      value={newJam.quantity}
      onChange={e => handleChange(e)}/>
      </div></div>
  
  <div className="col">
  <label>Price: </label>
  <div className="row m-3">
  <input 
      name="price"
      value={newJam.price}
      onChange={e => handleChange(e)}/>
      </div></div>

 <div className="col">
  <label>Size: </label>
  <div className="row m-3">
  <input 
      name="size"
      value={newJam.size}
      onChange={e => handleChange(e)}/>  
      </div></div>
      </div>

  <div className="row mt-3">
  <div className="col">
  <label>Image: </label>
  <div className="row m-3">
  <input 
      name="image"
      value={newJam.image}
      onChange={e => handleChange(e)}/>  
      </div></div>

 <div className="col">
  <button
  type="submit"
  className="btn btn-dark">
    Add Jam!
  </button>

  
  </div>
  </div>

</form>
</div>

</div>







  </div>
  )
}
