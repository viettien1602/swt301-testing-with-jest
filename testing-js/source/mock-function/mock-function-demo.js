const db = require('./db-connect')

applyDiscount = (order) => {
    const customer = db.getCustomerSync(order.customerId)
    if (customer.points > 10) order.totalPrice *= 0.9
}

module.exports = {applyDiscount}