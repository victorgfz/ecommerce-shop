import React from 'react'

const Head = ({item}) => {
    const title = document.querySelector('title')
    const metaDescription = document.querySelector('meta[name="description"]').setAttribute('content', 'Ecommerce Shop - Shop anything and anywhere!')
    
    if (item) {
        title.innerHTML = 'Ecommerce Shop | ' + item
        
    } else {
        title.innerHTML = 'Ecommerce Shop'
    }
   
  return (
    <></>
  )
}

export default Head