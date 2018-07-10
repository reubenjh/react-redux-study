export const navigate = (target) => {
  return {
    type: "NAVIGATE",
    target
  }
}

export const beerAdd = (id) => {
  return {
    type: "ADD_TO_CART",
    id
  }
}

export const updateCart = (cart) => {
  return {
    type: "UPDATE_CART",
    cart
  }
}