import React from 'react'
import {connect} from 'react-redux'

// components
import Cart from './Cart'
import Header from './Header'
import BeerList from './BeerList'
import ThankYou from './ThankYou'

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
    const thankYou = <ThankYou />
    return (
      <div className='app'>
        <Header />
        {this.props.navigation == 'listing' && beerList}
        {this.props.navigation == 'cart' && cart}
        {this.props.navigation == 'thankyou' && thankYou}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
