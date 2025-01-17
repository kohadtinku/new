import React from 'react'
import { useParams } from 'react-router-dom';

const Recipedetails = () => {
    const userId = useParams();
    console.log(userId);
  return (
   <>
    <h1>Recipe Details</h1>
    <p>User ID: {userId.userId}</p>
    
   </>
  )
}

export default Recipedetails