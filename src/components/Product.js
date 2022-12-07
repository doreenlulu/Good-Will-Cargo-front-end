import React from "react";
import "./Product.css";
// import ship2 from "./assets/ship2.jpg"

function Product () {
    return (
        <div className='products'>
          <h1>PRODUCTS AVAILABLE</h1>
          <div className='product__container'>
          <div className='product__wrapper'>
            
          <ul className='product__list'>
            <Product
              src='/home/doreen/Good-Will-Cargo-front-end/src/assets/ship1.jpg'
              text='product.'
              label='product'
              path='/products'
            />
            <Product
              src='/home/doreen/Good-Will-Cargo-front-end/src/assets/ship1.jpg'
              text='product'
              label='product'
              path='/products'
            />
          </ul>

          <ul className='product__list'>
            <Product
              src='/home/doreen/Good-Will-Cargo-front-end/src/assets/ship1.jpg'
              text='product'
              label='product'
              path='/products'
            />
            <Product
              src='/home/doreen/Good-Will-Cargo-front-end/src/assets/ship1.jpg'
              text='product'
              label='product'
              path='/products'
            />
          </ul>

          <ul className='product__list'>
            <Product
              src='/home/doreen/Good-Will-Cargo-front-end/src/assets/ship1.jpg'
              text='product'
              label='product'
              path='/products'
            />
            <Product
              src='/home/doreen/Good-Will-Cargo-front-end/src/assets/ship1.jpg'
              text='product'
              label='product'
              path='/products'
            />
          </ul>
        </div>

          <h2>Products available at your disposal</h2>

      </div>
    </div>
    );
}
export default Product;