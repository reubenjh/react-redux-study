import React from 'react'
import { connect } from 'react-redux'
import { navigate, updateCart, beerRemove, purchase } from '../actions'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: this.freshCart.bind(this)()
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  freshCart() {
    return this.props.cart.map(item => ({ ...item }))
  }

  handleChange(e) {
    e.preventDefault()
    let newCart = this.state.cart.map((beer) => {
      if (beer.id == e.target.id) {
        beer.quantity = Number(e.target.value)
      }
      return beer
    })
    this.setState({
      cart: newCart
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(updateCart(this.state.cart))
    // not obvious that you need to submit, and no visual confirmation of submitting yet
  }

  handleDelete (e) {
    e.preventDefault()
    let item = this.state.cart.find(beer => `${beer.id}-delete` == e.target.id)
    this.props.dispatch(beerRemove(item.id)) // dealing with global cart storage

    let newCart = this.state.cart.filter((beer) => { // dealing with local cart storage async problem
      return (beer.id != item.id)
    })
    this.setState({
      cart: newCart
    })
  }

  handleCheckout () {
    this.props.dispatch(navigate('thankyou'))
    this.props.dispatch(purchase(this.state.cart))
    // do something on thankyou page 
  }


  render() {
    return (<div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Beer</td>
            <td>Quantity</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {this.state.cart.map((item) => { // maps own state instance of cart 
            const name = item.name
            return (
              <tr key={item.id}>
                <td>{name}</td>
                <td>
                  <input className='update-input' value={item.quantity} onChange={this.handleChange} id={item.id} />
                </td>
                <td><button><span onClick={this.handleDelete} id={`${item.id}-delete`} className='fa fa-trash fa-2x' /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={() => this.props.dispatch(navigate('listing'))}>Continue shopping</a>
        <button onClick={this.handleSubmit}>Update</button>
        <button className='button-primary' onClick={this.handleCheckout}>Checkout</button>
      </p>
    </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)