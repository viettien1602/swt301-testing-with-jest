const db = require('../source/mock-function/db-connect')
const {applyDiscount} = require('../source/mock-function/mock-function-demo')

describe('Test applyDiscount func with custom mock function', () => {
    it('If customer\' points > 10, should apply 10% discount', () => {
        db.getCustomerSync = (id) => {
            console.log('Fake reading customer from db ...')
            return {id: id, points: 20}
        }
        let order = {
            customerId: 1,
            totalPrice: 10
        }
        applyDiscount(order)
        expect(order.totalPrice).toBe(9)
    })
    it('If customer\' points <= 10, should not apply 10% discount', () => {
        db.getCustomerSync = (id) => {
            console.log('Fake reading customer from db ...')
            return {id: id, points: 10}
        }
        let order = {
            customerId: 1,
            totalPrice: 10
        }
        applyDiscount(order)
        expect(order.totalPrice).toBe(10)
    })
})

describe('Test applyDiscount func with jest mock function', () => {
    // Create jest mockfunction
    // const mockFunction = jest.fn()
    // mockFunction.mockReturnValue(1);
    // const result = mockFunction();

    it('If customer\' points > 10, should apply 10% discount', () => {
        //Change implementation
        // db.getCustomerSync = jest.fn(id => {
        //     return {
        //         id: id,
        //         points: 20
        //     }
        // })

        //Mock implementation
        // db.getCustomerSync = jest.fn()
        // db.getCustomerSync.mockImplementation((id) => {
        //     return {
        //         id: id,
        //         points: 20
        //     }
        // })
        
        //Mock return value
        db.getCustomerSync = jest.fn().mockReturnValue({
            id: db.getCustomerSync.mock?.calls[0][0],
            points: 20
        })
        let order = {
            customerId: 1,
            totalPrice: 10
        }
        applyDiscount(order)
        expect(order.totalPrice).toBe(9)
        expect(db.getCustomerSync).toHaveBeenCalled()
        expect(db.getCustomerSync).toHaveBeenCalledWith(1)
        expect(db.getCustomerSync.mock.calls[0][0]).toBe(1)

    })
})