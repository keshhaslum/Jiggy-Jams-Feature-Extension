import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"; 


function ProductList() {
  const [allJams, setAllJams] = useState([]); 

  useEffect(() => {
 
    getAllJams();
  }, []);

  const getAllJams = () => {
    console.log("hey");
    fetch("/api/products") 
      .then((response) => response.json()) 
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
       
        ))}
      </div>
    </div>
  );
}



export default ProductList; 
