const AqfrNetworkClient = require('aqfr.network.client');
const RippleAPI = require('ripple-lib').RippleAPI;
var express = require("express");
var bodyParser = require('body-parser');
const fetch = require('node-fetch');

var app = express();
var port = process.env.PORT || 8080;


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.listen(port, async () => {
  await api.connect();
  console.log("Server running on port:", port);

});



const api = new RippleAPI({
  // server: 'wss://s1.ripple.com' // Public rippled server
  server: 'wss://s.altnet.rippletest.net:51233' // Test Net
});


async function start(myAddress, destinationAddress, secret, paymentData) {

  console.log('getting account info for', myAddress);
  const accInfo = await api.getAccountInfo(myAddress);

  console.log(accInfo);
  console.log('getAccountInfo done');

  const [maxLedgerVersion, txJSON] = await doPrepare(paymentData);
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
  // const paymentResponse = await checkStatus (txID, earliestLedgerVersion)
  return { txID, earliestLedgerVersion };
}




// Continuing after connecting to the API
async function doPrepare(payment) {
  // const sender = "rBfLmb4EVdPANsc7X7oNtbydYqxJHphTm3"
  const preparedTx = await api.prepareTransaction( payment, {
    // Expire this transaction if it doesn't execute within ~5 minutes:
    "maxLedgerVersionOffset": 75
  });

  const maxLedgerVersion = preparedTx.instructions.maxLedgerVersion;
  console.log("Prepared transaction instructions:", preparedTx.txJSON)
  console.log("Transaction cost:", preparedTx.instructions.fee, "XRP")
  console.log("Transaction expires after ledger:", maxLedgerVersion)

  return [maxLedgerVersion, preparedTx.txJSON];
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
    return tx.outcome;
  } catch(error) {
    console.log("Couldn't get transaction outcome:", error)
  }
}

app.get('/api/test/payment', async function (req, res) {
  // const { sender, receiver, amount} = req.body;
  const secret = 'snSVD3hwfGvZTV51JFKD4VLczmXdj';

  const sender = 'rBfLmb4EVdPANsc7X7oNtbydYqxJHphTm3';
  const receiver = 'rHJyNja4hmBVt8JfjyreP53pYyE9QiBNrx';
  const amount = "20";

  const paymentData = {
    "TransactionType": "Payment",
    "Account": sender,
    "Amount": amount,
    "Destination": receiver,
  };

  const paymentResponse = await start(sender, receiver, secret, paymentData);

  console.log(paymentResponse);

  res.json(paymentResponse);
});

app.get('/api/payment', async function (req, res) {
  const { txID, earliestLedgerVersion} = req.query;
  console.log(txID, earliestLedgerVersion)
  // const paymentResponse = await watchLedger (maxLedgerVersion, txID, earliestLedgerVersion )
  const paymentResponse = await checkStatus (txID, parseInt(earliestLedgerVersion, 10))

  console.log(paymentResponse);

  res.json(paymentResponse);
});

app.post('/api/payment', async function (req, res) {

  const { sender, receiver, amount} = req.body;
  const secret = 'snSVD3hwfGvZTV51JFKD4VLczmXdj';

  // const myAddress = 'rBfLmb4EVdPANsc7X7oNtbydYqxJHphTm3';
  // const destinationAddress = 'rHJyNja4hmBVt8JfjyreP53pYyE9QiBNrx';

  const paymentData = {
    "TransactionType": "Payment",
    "Account": sender,
    "Amount": amount,
    "Destination": receiver,
  };

  const paymentResponse = await start(sender, receiver, secret, paymentData);

  console.log(paymentResponse);

  res.json(paymentResponse);
});
