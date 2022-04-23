require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/VySDpGjA3HmZOw-Zg9VJEqY2toXKX-iM',
      accounts: ['2d4f91fb52a155b999de06f9ff9d1b4190eac081788c1dc8262d0b4c4bd3f36e'],
    },
  },
};