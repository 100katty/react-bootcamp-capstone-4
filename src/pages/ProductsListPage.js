import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import SectionCategories from '../components/SectionCategories'
import categories from '../utils/product-categories.json';
import featureProductos from '../utils/featured-products.json';

export default function ProductsListPage() {
  return (
    <>
       <h1>This is the Product List Page</h1>
       <div className='container-Prods-List'>
            <SectionCategories  categories={categories}/>
            <FeaturedProducts featureProductos={featureProductos}/>
       </div>
     
      
    </>
  )
}
