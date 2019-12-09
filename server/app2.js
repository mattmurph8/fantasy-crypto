const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  // server: 'wss://s1.ripple.com' // Public rippled server
  server: 'wss://s.altnet.rippletest.net:51233' // Test Net
});

const myAddress = 'rBfLmb4EVdPANsc7X7oNtbydYqxJHphTm3';
const secret = 'snSVD3hwfGvZTV51JFKD4VLczmXdj';

const destinationAddress = 'rHJyNja4hmBVt8JfjyreP53pYyE9QiBNrx';

const paymentData = {
  "TransactionType": "Payment",
  "Account": myAddress,
  "Amount": "10",
  "Destination": destinationAddress,
};

async function start() {
  await api.connect();
  console.log('getting account info for', myAddress);
  const accInfo = await api.getAccountInfo(myAddress);


    console.log(accInfo);
    console.log('getAccountInfo done');

    const [maxLedgerVersion, txJSON] = await doPrepare(myAddress, destinationAddress);
    console.log('-------------------------------------------------------------')
    console.log(txJSON)

    const [txID, signedTX] = await signTransaction (txJSON, secret)
    console.log('-------------------------------------------------------------')
    console.log('signedTX', signedTX)
    console.log('-------------------------------------------------------------')
    console.log('txID', txID)

    console.log('-------------------------------------------------------------')
    const earliestLedgerVersion = await doSubmit(signedTX, secret)
    console.log(earliestLedgerVersion)

    await watchLedger (maxLedgerVersion, txID, earliestLedgerVersion )

}




// Continuing after connecting to the API
async function doPrepare(sender, destination) {
  // const sender = "rBfLmb4EVdPANsc7X7oNtbydYqxJHphTm3"
  const preparedTx = await api.prepareTransaction({
    "TransactionType": "Payment",
    "Account": sender,
    // "Amount": api.xrpToDrops("22"), // Same as "Amount": "22000000"
    "Amount": "100",
    "Destination": destination,
  }, {
    // Expire this transaction if it doesn't execute within ~5 minutes:
    "maxLedgerVersionOffset": 75
  })
  const maxLedgerVersion = preparedTx.instructions.maxLedgerVersion
  console.log("Prepared transaction instructions:", preparedTx.txJSON)
  console.log("Transaction cost:", preparedTx.instructions.fee, "XRP")
  console.log("Transaction expires after ledger:", maxLedgerVersion)



  return [maxLedgerVersion, preparedTx.txJSON]
}

async function signTransaction (txJSON, secret) {
  // Continuing from the previous step...
  const response = api.sign(txJSON, secret)
  const txID = response.id
  console.log("Identifying hash:", txID)
  const txBlob = response.signedTransaction
  console.log("Signed blob:", txBlob)
  return [txID, txBlob]
}



// use txBlob from the previous example
async function doSubmit(txBlob) {
  const latestLedgerVersion = await api.getLedgerVersion()
  console.log('latestLedgerVersion', latestLedgerVersion)
  console.log('txBlob', txBlob)
  const result = await api.submit(txBlob)

  console.log("Tentative result code:", result.resultCode)
  console.log("Tentative result message:", result.resultMessage)

  // Return the earliest ledger index this transaction could appear in
  // as a result of this submission, which is the first one after the
  // validated ledger at time of submission.
  return latestLedgerVersion + 1
}

async function watchLedger (maxLedgerVersion, txID, earliestLedgerVersion ) {
  api.on('ledger', async (ledger) => {
    console.log("Ledger version", ledger.ledgerVersion, "was just validated.")
    await checkStatus (txID, earliestLedgerVersion)
    if (ledger.ledgerVersion > maxLedgerVersion) {
      console.log("If the transaction hasn't succeeded by now, it's expired")

    }
  })
}


// Continues from previous examples.
// earliestLedgerVersion was noted when the transaction was submitted.
// txID was noted when the transaction was signed.

async function checkStatus (txID, earliestLedgerVersion) {
  try {
    tx = await api.getTransaction(txID, {minLedgerVersion: earliestLedgerVersion})
    console.log("Transaction result:", tx.outcome.result)
    console.log("Balance changes:", JSON.stringify(tx.outcome.balanceChanges))
  } catch(error) {
    console.log("Couldn't get transaction outcome:", error)
  }
}


start()
