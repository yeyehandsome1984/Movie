// src/Genre.js
import React from 'react';


function Center({ Title, description1, description2, description3 }) {
  return (
    <div>
      <h1>{Title}</h1>
      <p>{description1}</p>
      <p>{description2}</p>
      <p>{description3}</p>
      <p style={{color:grey}}>view all questions</p>
    </div>
  );
};

export default Center;
