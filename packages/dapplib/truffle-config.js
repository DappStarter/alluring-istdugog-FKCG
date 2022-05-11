require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember common inner casual flush taste'; 
let testAccounts = [
"0xeb9ba8a78ebf4858d5aa195a639c8369f13c07f3a016ed69e8e42cc8eb29e17b",
"0x42efb1ae88c8f61f0575c5ca8d9bca6db310dc202c3d99b97bda1c9325fe66fb",
"0xbad706da2bf1448fddd650b9eb62fe6d685c2b24d9dc3393da5336e340dd687b",
"0x36a4a11b3a3372c4691c3c1cfdce89628e12395cc908fca4c637a3a8dbd6a50a",
"0x704ddadb97763f0f20c12aeb0234887484a78f60b6f2684e079ce9bf6f0d9ed5",
"0x787bd8defe5293b9b9b2d757489acaa872d045f22d6d2111392528730f1f65e2",
"0x8d0154dfa3d2ca4d97a080981667e19f1990ed65a841b6e97430d75a971b7847",
"0x511cadc41edb02d97fa1236188f31f2b388311409fccb0f062ee880f7e973189",
"0xbb59ca77c8573f4f85500a58e97b31a7b4df658881edf45b6bf86655ee781893",
"0x66e824a4d392123f7ebd0dff8f5ade71fbdb4433e466751bc3865021efeb1e0c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

