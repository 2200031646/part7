import React from 'react';
import Macbook from './images/mac.jpeg';
import Dell from './images/dell.jpeg';
import Lenovo from './images/lenovo.jpeg';
import Hp from './images/hp.jpeg';

const Laptop = () => {
  const laptopData = [
    {
      brand: "Macbook",
      img: Macbook,
      model: "Macbook Air",
      price: "120000",
      available: true
    },
    {
      brand: "Dell",
      img: Dell,
      model: "Xps 13",
      price: "80000",
      available: false
    },
    {
      brand: "Lenovo",
      img: Lenovo,
      model: "Lenovo Ideapad 3",
      price: "75000",
      available: true
    },
    {
      brand: "Hp",
      img: Hp,
      model: "Hp 240 g8",
      price: "60000",
      available: false
    },
  ];

  return (
    <div>
      {laptopData.map((laptop, index) => (
        <div key={index}>
          <h2>{laptop.brand}</h2>
          <img src={laptop.img} alt={laptop.brand} width="200px" height="200px" />
          <p>Model: {laptop.model}</p>
          <p>Price: {laptop.price}</p>
          <p>Available: {laptop.available ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default Laptop;