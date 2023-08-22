import { asciiToTrytes } from '@iota/converter';
// https://github.com/jensendarren/iota-message-example/blob/master/app.js

// Require the IOTA library
import { composeAPI } from '@iota/core';

// Create a new instance of the IOTA API object
// Use the `provider` field to specify which node to connect to
const iota = composeAPI({
  provider: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe:443'
});

const depth = 3;
const minimumWeightMagnitude = 10;

// Note this is NOT a real seed - its just used here since its required but not used as this is a zero value transaction
const seed = 'MLWKWPZNGL9NMFXGRHMEIQHSBQR9PKQQMFATCPHQOSWCKC9HNORLAJNOXVB9KPGTCTWLLIFYGPDKFLBHH'
// This address does not have to belong to anyone. To be valid, the address just needs to consist of 81 trytes.
// You might like to put your own addresss here to test this out
const sendToAddress =
'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';

const message = JSON.stringify({"message": "Hello world"});
const messageInTrytes = asciiToTrytes(message);

const transfers = [
  {
      value: 0,
      address: sendToAddress,
      message: messageInTrytes
  }
];

export function sendViaIOTAFirst() {
    debugger
    return iota.prepareTransfers(seed, transfers)
    .then((trytes: any) => {
        debugger
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then((bundle: any) => {
        debugger
        console.log(bundle[0].hash)
    })
    .catch((err: Error) => {
        debugger
        console.error(err)
    });
}

