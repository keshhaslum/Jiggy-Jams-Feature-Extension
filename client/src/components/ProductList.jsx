import { useEffect, useState } from "react"; // this  isn't working
import App from "../App"; // is this correct
import { Link } from "react-router-dom"; // need to import the link

// can't pass a prop that doesn't exist - only in the brackets () not the body of the function//

function ProductList() {
  // showJamProfile or currentJamProfile doesn't work here not sure why
  const [allJams, setAllJams] = useState([]); // holds all data for all jams, if you look at postman you will see the data is in an array []
  // const showJamProfile = (id) => {
  //   jam.id;
  //   console.log(id, "test");
  // }; // works on console

  useEffect(() => {
    // always runs when your pages loads  - e.g. allJams function
    // have to call getAllJams as you can't name the same as the state e.g. allJams which holding the data
    getAllJams();
  }, []);

  const getAllJams = () => {
    console.log("hey");
    fetch("/api/products") 
      .then((response) => response.json()) // converts in javascript from json in postman
      .then((jams) => {
        console.log(jams);
        setAllJams(jams);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className ="mt-20">
      <div className="text-bg-muted p-3">
      
      <p className="mt-40 mx-10 text-center">
      <h3>Calling all music lovers!</h3>

        <h5>Are you ready to groove and jam to the rhythm
        of delicious flavours? </h5>
        
        <p><h6>Look no further than <h7>Jiggy Jams</h7>, your one-stop
        online shop for jammin' goodness! 🎶 </h6></p>
        
        <p><h6> Get ready to tantalize your taste
        buds with a symphony of fruity sensations that will have you dancing in
        your kitchen. 💃🏾</h6></p>
        
        <p><h6>From classic melodies like strawberry and blueberry to
        funky fusions like pineapple and mango, Jiggy Jams has got your jam
        cravings covered. So join the jam revolution and let the tasty beats of
        Jiggy Jams transport you to a whole new level of fruity euphoria!🍒</h6></p>
      </p></div>
      <div className="row">
        {allJams.map((jam) => (
          // <span onClick={() => handleClick((key = jam.id))}> //doesn't work returns back to normal grid
          <div className="col-3 p-4" key={jam.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={jam.image} className="card-img-top rounded" />
              <div className="card-body">
                <p className="card-text">{jam.name}</p>
                <p className="card-text">{jam.description}</p>
                <p className="card-text">£ {jam.price}</p>
                <Link to={`/products/${jam.id}`}>
                  <button className="btn mt-10 btn btn-dark">more info</button>
                </Link>

                <i className="fa-solid fa-cart-plus fa-lg p-50"></i> 

              </div>
            </div>
          </div>
          // </span> // removed to return to a normal grid
        ))}
      </div>
    </div>
  );
}

//css tricks
// router student profile watch again
// control c - stop front end
// can I show the name of the value?

export default ProductList; // always have to export the file called same as filename and function name
