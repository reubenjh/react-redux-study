import React from 'react'
import {connect} from 'react-redux'

const BeerList = (props) => {
    console.log(props)
  return (
    <div className='thankyou'>
        {props.purchase.map(item => {
            return <p>{item.name}</p>
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        purchase: state.purchase
    }
}

export default connect(mapStateToProps)(BeerList)