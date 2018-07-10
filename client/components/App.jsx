import React from 'react'
import {connect} from 'react-redux'

// components
import Cart from './Cart'
import Header from './Header'
import BeerList from './BeerList'

// data
import beerData from '../../data/beers'



class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    console.log(this.props)
    const cart = <Cart />
    const beerList = <BeerList beers={beerData.beers} />
    return (
      <div className='app'>
        <Header />
        {this.props.navigation == 'listing' ? beerList : cart}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
