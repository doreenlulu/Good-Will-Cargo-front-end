import React, { useRef } from 'react'
import './Product.css'
// import ship2 from "./assets/ship2.jpg"

function Products({ products }) {
  return (
    <div className="products">
      <h1>PRODUCTS AVAILABLE</h1>
      <div className="product__container">
        <div className="product__wrapper">
          <ul className="product__list">
            {products.map((cargoShip) => {
              return <Product key={cargoShip.id} cargoShip={cargoShip} />
            })}
          </ul>
        </div>

        <h2>Products available at your disposal</h2>
      </div>
    </div>
  )
}
export default Products
function Product({ cargoShip }) {
  const detailsDiv = useRef();

  function displayDetails() {
    if (detailsDiv.current.classList.value.includes('active')) {
      detailsDiv.current.classList.remove('active')
    } else {
      detailsDiv.current.classList.add('active')
    }
  }

  const {
    id,
    name,
    img_url,
    capacity,
    remaining,
    current_location,
    destination,
    leaving_date,
    rate_per_cargo,
  } = cargoShip;

  
  function handleBook(){
    console.log(id)
  }
  
  return (
    <div className="product-div">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${img_url})` }}
        onClick={displayDetails}
      >
        <p>{name}</p>
      </div>
      <div id={id} ref={detailsDiv} className="product-details">
        <div>
          <p>Name :</p>
          <p> {name}</p>
        </div>
        <div>
          <p>
            {current_location} <strong> to </strong> {destination}
          </p>
        </div>
        <div>
          <p>Leaving :</p>
          <p> {leaving_date}</p>
        </div>
        <div>
          <p>Rate Per Cargo :</p>
          <p>Ksh.{rate_per_cargo}</p>
        </div>
        <div>
          <p>Capacity :</p>
          <p>{capacity}</p>
        </div>
        <div>
          <p>Remaining : </p>
          <p>{remaining}</p>
        </div>
        <button onClick={handleBook}>Book</button>
      </div>
    </div>
  )
}
