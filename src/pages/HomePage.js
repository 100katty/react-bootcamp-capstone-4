import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductsCategories from '../components/ProductsCategories';
import SliderBanners from '../components/SliderBanners';
import banners from '../utils/featured-banners.json';
import categories from '../utils/product-categories.json';
import featureProductos from '../utils/featured-products.json';


export const HomePage = () => {
  return (
    <> 
      <SliderBanners banners={banners} />
      <ProductsCategories categories={categories} />
      <FeaturedProducts featureProductos={featureProductos} />

    </>
  )
}
