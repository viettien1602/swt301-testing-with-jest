//This module is for connecting to database

getCustomerSync = (id) => {
    console.log('Reading a customer from database')
    return {id: id, points: 15}
}

getCustomer = (id) => {
    return new Promise((resolve, reject) => {
        console.log('Reading a customer from database')
        resolve({id: id, points: 15})
    })
}

module.exports = {getCustomerSync, getCustomer}