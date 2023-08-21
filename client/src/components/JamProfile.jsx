import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JamProfile() {
  
  const { id } = useParams(); // useparams lets you reach into the url - part of react router method
  const [JamProfile, setJamProfile] = useState(null); // need initate as null to check later

  useEffect(() => {

    getJamProfile();
  }, []);

  const getJamProfile = async () => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    console.log(data);
    setJamProfile(data);
  };
  return (
    <div className="text-center">
      {JamProfile && (
        <div className="profile pt-20"> 
          <p><h3>{JamProfile[0].name}</h3></p>
          <p>{JamProfile[0].description}</p>
          <p>Ingredients: {JamProfile[0].ingredients}</p>
          <p>Quantity: {JamProfile[0].quantity}</p>
          <p>{JamProfile[0].size} grams</p>
          <p>£{JamProfile[0].price}</p>
          <img src={JamProfile[0].image} height="300"/>
        </div>
      )}
    </div>
  );
}
