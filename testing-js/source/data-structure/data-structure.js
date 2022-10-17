const CryptoJS = require("crypto-js");

class Block {
    constructor(prevHash, data) {
        this.prevHash = prevHash
        this.data = data
        this.timestamp = new Date()
        this.hash = this.calculateHash()
        this.nonce = 0
    }

    calculateHash() {
        return CryptoJS.SHA256(this.prevHash + JSON.stringify(this.data) + this.timestamp + this.nonce).toString()
    }

    mine(difficulty) {
        while (!this.hash.startsWith('0'.repeat(difficulty))) {
            this.nonce++
            this.hash = this.calculateHash()
        }
    }
}

class BlockChain {
    constructor(difficulty) {
        const genesisBlock = new Block('0000', {isGenesis: true})
        this.chain = [genesisBlock]
        this.difficulty = difficulty
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(data) {
        const lastBlock = this.getLastBlock();
        const newBlock = new Block(lastBlock.hash, data)
        // console.log('Start mining ...')
        // console.time('mine')
        newBlock.mine(this.difficulty)
        // console.timeEnd('mine')
        // console.log('End mining', newBlock)
        this.chain.push(newBlock)
        return newBlock;
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const prevBlock = this.chain[i - 1]
            if (currentBlock.hash !== currentBlock.calculateHash())
                return false
            if (currentBlock.prevHash !== prevBlock.hash)
                return false
        }
        return true
    }
}

const blockChain = new BlockChain(4)

blockChain.addBlock({
    from: 'Tien',
    to: 'Khanh',
    amount: 100
})

blockChain.addBlock({
    from: 'Sy',
    to: 'Sang',
    amount: 500
})

blockChain.addBlock({
    from: 'Sang',
    to: 'My',
    amount: 200
})

blockChain.addBlock({
    from: 'My',
    to: 'Kiet',
    amount: 300
})

module.exports = blockChain

