import React  from 'react';


export default function FeaturedProducts(props) {
  return (

   <div className='container-products'>
     <h2>Top Sellers</h2>
      <div className='products'>
        {props.featureProductos.results.map((featureProduct) => (
            <div className='box-products' key={featureProduct.id}>
              <img className='imagen'  
              src={featureProduct.data.mainimage.url}  alt={featureProduct.data.name} />
              <div className='product'>
                <h3 className='name'>{featureProduct.data.name}</h3>
                <p className='category'>{featureProduct.data.category.slug} </p>
                <p className='price'>${featureProduct.data.price} </p>
            </div>
                
          </div>
        ))}
        
      </div>
</div>
    
  )
}
