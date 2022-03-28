import React from 'react'

export default function ProductsCategories(props) {
  return (
    <div className='container-categories'>
     <h2>SHOP BY CATEGORY</h2>
      <div className='categories'>
        {props.categories.results.map((categorie) => (
            <div key={categorie.id}>
                <button className='box-categories'>
                  <h3 className='name-category'>{categorie.data.name}</h3>
                </button>
           
          </div>
        ))}
        
      </div>
</div>
    
  )
}
