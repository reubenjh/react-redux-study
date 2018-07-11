import React from 'react'
import {connect} from 'react-redux'

import BeerListItem from './BeerListItem'
import { navigate } from '../actions';

const BeerList = (props) => {
  return (
    <div className='beerlist'>
      <p className='welcome'>Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
        <a href='#' className='cartbutton' onClick={() => props.dispatch(navigate('cart'))}>Go to cart</a>
      {props.beers.map(beer => {
        return (
          <BeerListItem key={beer.id} beer={beer} />
        )
      })}
    </div>
  )
}

export default connect()(BeerList)
