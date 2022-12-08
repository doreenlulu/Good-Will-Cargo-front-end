import React from 'react'
import classes from './Product.module.css'
import ProductData from './ProductData'

function Product() {
  return (
    <div className='Product'>
        {/* <header className='Product-header'>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg" />
            </nav>
        </header> */}
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg" alt="Product Preview" />
            </div>

            <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
                <p className={classes.ProductDescription}>{ProductData.description}</p>
                <h3 className={classes.ProductHeading}>Select Destination</h3>
                <div>
                    <img className={classes.ProductImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGsVWjEM9oQs4vgDuJImY62Gola81e2cCCyj9ct6bhUuCca2EzQNGCUwLY5MuZczIdYg&usqp=CAU"
                    alt="Maldives" />
                     <img className={classes.ProductImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCCfMCcFqBDITE8-Gx1z52uDGYMFnb9DJ1vmE95mEd5tg0-wL7WTuRoM4ch--K12b_nk&usqp=CAU"
                    alt="Maldives" />
                     <img className={classes.ProductImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGsVWjEM9oQs4vgDuJImY62Gola81e2cCCyj9ct6bhUuCca2EzQNGCUwLY5MuZczIdYg&usqp=CAU"
                    alt="Maldives" />
                     <img className={classes.ProductImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCCfMCcFqBDITE8-Gx1z52uDGYMFnb9DJ1vmE95mEd5tg0-wL7WTuRoM4ch--K12b_nk&usqp=CAU"
                    alt="Maldives" />
                     <img className={classes.ProductImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGsVWjEM9oQs4vgDuJImY62Gola81e2cCCyj9ct6bhUuCca2EzQNGCUwLY5MuZczIdYg&usqp=CAU"
                    alt="Maldives" />
                     <img className={classes.ProductImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCCfMCcFqBDITE8-Gx1z52uDGYMFnb9DJ1vmE95mEd5tg0-wL7WTuRoM4ch--K12b_nk&usqp=CAU"
                    alt="Maldives" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product