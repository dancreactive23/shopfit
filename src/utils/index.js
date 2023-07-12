
/**
 * This function calculates the total price of a new order.
 * @param {[]} products CartProducts array of objects
 * @returns {Number} total price of the cart products 
 */
export const totalPrice = (products) =>{
    return products.reduce((sum,product) => sum + product.price,0)
}

