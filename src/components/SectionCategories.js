import React from 'react'

export default function SectionCategories(props) {
  return (
    <div className='container-categories'>
     <h2>Categorias de Productos</h2>
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
