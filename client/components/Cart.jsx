import React from 'react'
import { connect } from 'react-redux'
import { navigate, updateCart } from '../actions'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: props.cart.map(item => ({ ...item }))
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
                <td><button><span className='fa fa-trash fa-2x' /></button></td>
                {/* TODO: implement deletes */}
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={() => this.props.dispatch(navigate('listing'))}>Continue shopping</a>
        <button onClick={this.handleSubmit}>Update</button>
        <button className='button-primary'>Checkout</button>
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