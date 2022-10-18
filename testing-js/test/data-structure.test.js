const blockChain = require('../source/data-structure/data-structure')
const difficulty = 4;
console.log(blockChain)

describe('Add a new block to the chain', () => {
    let data = {
        from: 'Khanh',
        to: 'My',
        amount: 200
    }
    const lastBlock = blockChain.getLastBlock()
    blockChain.addBlock(data)

    it('A new block added must have hash matching difficulty', () => {
        const addedBlock = blockChain.getLastBlock()
        const regex = new RegExp('^0{' + difficulty + '}')
        expect(addedBlock.hash).toMatch(regex)
    })

    it('A new block added must have prevHash matching the hash of last block of blockchain', () => {
        const addedBlock = blockChain.getLastBlock()
        // expect(addedBlock.prevHash).toBe(lastBlock.hash) --the same as toEqual()
        expect(addedBlock.prevHash).toEqual(lastBlock.hash)
    })

    it('A new block added must have data immutable', () => {
        const addedBlock = blockChain.getLastBlock()
        const testData = {
            from: 'Khanh',
            to: 'My',
            amount: 200
        }
        // expect(addedBlock.data).toBe(testData) -- this won't work because object is a reference type
        expect(addedBlock.data).toEqual(testData)
        expect(addedBlock.data).toMatchObject({amount: 200})
    })
})

describe('Changing data of a block of blockchain', () => {
    let block1 = blockChain.chain[1]
    it('Not changing anything, should return valid status', () => {
        expect(blockChain.isValid()).toBeTruthy()
        // expect(blockChain.isValid()).not.toBeFalsy() --the same as above method
    })

    it('Changing data of block 1 only, should return invalid status', () => {
        block1.data = {
            from: 'Tien',
            to: 'Khanh',
            amount: 50 //changing 100 to 50
        }
        expect(blockChain.isValid()).toBeFalsy()
    })
    it('Changing data and hash of block 1, should return invalid status', () => {
        block1.data = {
            from: 'Tien',
            to: 'Khanh',
            amount: 50 //changing 100 to 50
        }
        block1.hash = block1.calculateHash() //changing hash of block as well
        expect(blockChain.isValid()).toBeFalsy()
    })
})

