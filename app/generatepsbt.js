const bitcoin = require('bitcoinjs-lib');

// Use the testnet network
const network = bitcoin.networks.testnet;

// Create a new PSBT for the testnet
const psbt = new bitcoin.Psbt({ network });

// Actual UTXO data (replace with real data)
const utxoData = {
  txid: '47dcb44ac4d561ee3bd74c4fb895b86534fba7c79ab67e42b08990a6decc6be1',
  index: 2,
  amount: 10000, // Amount in satoshis
};

// Actual transaction hex (replace with real data)
const txHex = 'full_hex_of_the_genesis_transaction';

// Add input information - UTXO
psbt.addInput({
  hash: utxoData.txid,
  index: utxoData.index,
  nonWitnessUtxo: Buffer.from(txHex, 'hex'),
});

// Actual recipient's testnet address and amount to send (replace with real data)
const recipientAddress = 'testnet_recipient_address';
const sendAmount = 5000; // Amount to send in satoshis

// Add output information - recipient
psbt.addOutput({
  address: recipientAddress,
  value: sendAmount,
});

// Actual sender's change address (replace with real data)
const changeAddress = 'sender_change_address';
// Calculate the change amount; don't forget to subtract the estimated fee!
const fee = 1000; // Example fee in satoshis
const changeAmount = utxoData.amount - sendAmount - fee;

// Add change output
psbt.addOutput({
  address: changeAddress,
  value: changeAmount,
});

// Serialize the PSBT to a Base64 string for the user to sign
const psbtBase64 = psbt.toBase64();
console.log('PSBT for the user to sign:', psbtBase64);

// The user signs the PSBT with their Unisat wallet and returns the signed PSBT back to you
// For this example, let's assume you have received the signed PSBT back as a Base64 string
const signedPsbtBase64 = 'signed_psbt_base64_from_user'; // Replace with the signed PSBT Base64 string

// Now you can finalize the PSBT
const signedPsbt = bitcoin.Psbt.fromBase64(signedPsbtBase64, { network });
signedPsbt.finalizeAllInputs();

// Extract the transaction hex
const transactionHex = signedPsbt.extractTransaction().toHex();
console.log('Final transaction hex:', transactionHex);

// The transaction hex can now be broadcasted to the Bitcoin testnet
// Broadcasting would be done using a Bitcoin node or a block explorer API that supports transaction broadcasting
// The code for broadcasting the transaction is not included here as it depends on your specific environment and setup
