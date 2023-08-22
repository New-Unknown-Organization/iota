async function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const message = await client.message()
        .index('IOTA.RS BINDING - NODE.JS')
        .data('a new message!!!')
        .submit();

    console.log(message);
}

run()