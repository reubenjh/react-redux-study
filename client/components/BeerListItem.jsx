import React from 'react'
import {beerAdd} from '../actions'
import {connect} from 'react-redux'

const BeerListItem = (props) => {
  const beer = props.beer
  return (
    <div className='beer'>
      <p className='name'>{beer.name}</p>
      <p className='description'>{beer.brewery}</p>
      <p> 
        <span className='country'>{beer.country}</span>
        <span className='abv'>{beer.abv} abv</span>
        <a href='#'
          className='cart-link'
          onClick={() => props.dispatch(beerAdd(beer.id))}>Add to cart</a>
      </p>
    </div>
  )
}

export default connect()(BeerListItem)
