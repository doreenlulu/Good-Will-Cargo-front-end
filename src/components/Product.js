import React from "react";
import "./Product.css";
// import ship2 from "./assets/ship2.jpg"

function Products () {
    return (

        <div className='products'>
          <h1>PRODUCTS AVAILABLE</h1>
          <div className='product__container'>

          <div className='product__wrapper'>
            
          <ul className='product__list'>
            <Product
              src='https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg'
              text='product.'
              label='product'
              path='/products'
            />
            <Product
              src='https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg'
              text='product'
              label='product'
              path='/products'
            />
          </ul>

          <ul className='product__list'>
            <Product
              src='https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg'
              text='product'
              label='product'
              path='/products'
            />
            <Product
              src='https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg'
              text='product'
              label='product'
              path='/products'
            />
          </ul>

          <ul className='product__list'>
            <Product
              src='https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg'
              text='product'
              label='product'
              path='/products'
            />
            <Product
              src='https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg'
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
export default Products;