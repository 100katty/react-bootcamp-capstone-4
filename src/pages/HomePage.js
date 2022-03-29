import { useState } from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductsCategories from '../components/ProductsCategories';
import SliderBanners from '../components/SliderBanners';
import banners from '../utils/featured-banners.json';
import categories from '../utils/product-categories.json';
import featureProductos from '../utils/featured-products.json';
import ProductsListPage from './ProductsListPage';


export const HomePage = () => {
  const [show, setShow] = useState(false);

  return (
    <> 
      <SliderBanners banners={banners} />
      <ProductsCategories categories={categories} />
      {show ? <ProductsListPage/>  :  <FeaturedProducts featureProductos={featureProductos} />}
      
             <button className='box-categories' onClick={() => setShow((prev) => !prev)}>
                  <h3 className='name-category'>Ver todos los productos</h3>
             </button>
     
     

    </>
  ) 
}
