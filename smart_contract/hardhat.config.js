require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/bVwYmAJTxyratDOFvfq37A6VyhqNLWBK',
            accounts: ['756ff487ed4ed315182e9c9e7e4de9bbb6b69786d8a1b2dd0e5bec8fe41a8c9b'],
        },
    },
};