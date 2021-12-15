require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth outside collect grace gloom sunset gauge'; 
let testAccounts = [
"0x5cbc34ded74ce0ecda3bcbf1321fe753eeac424c3be03f624df447de224fd6ac",
"0xdb281aeb90200c6fce5643be3ad8e47d3b2d3617138abe27bdb77326eadc2784",
"0x4433102b008518c2d915a508f8cb934a18739fd6cdb97377918872e042ed0543",
"0x8267d391515d087b6d1618673bc09781d319eb6f86d627a6c1f82abf7fb52071",
"0xb8eea28fd7fdf79d77d9a9df9916da82785381faf4d7d3f813b5f0c5144b6264",
"0xcd9abf77d567bfe633e684c4d52f43305d6f9a5804ee0f712a49e4e28490daf2",
"0xacf8f395ff3d9e270e54f87975e964b861840f7820fa79efe3363d8d27573e56",
"0x2fcedc574af6d26b1400f2834ae05c12e799573c8b58ab442ca68a424c6ae0b0",
"0xcbc5943eefe93484f3095f8b866fba036597415bf22696936e9d629aed26b7fd",
"0x58fc1937c934b569cbed4dfc213f34e7c33f663bec0e426ff2bef97f468e8916"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

