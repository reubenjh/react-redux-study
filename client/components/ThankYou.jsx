import React from 'react'
import { connect } from 'react-redux'

const BeerList = (props) => {
    console.log(props)
    return (
        <div className='cart'>
            <table>
                <thead>
                    <tr>
                        <td>Beer</td>
                        <td>Quantity</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {props.purchase.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${Math.random() * 15 + 3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        purchase: state.purchase
    }
}

export default connect(mapStateToProps)(BeerList)