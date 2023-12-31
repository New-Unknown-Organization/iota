import { AccountBuilder, ExplorerUrl, init } from "@iota/identity-wasm/web";

const createIdentity = async () => {
  await init();

  let builder = new AccountBuilder();
  let account = await builder.createIdentity();

  const did = account.did();

  console.log(did.toString());

  console.log(account.document());
  console.log(`Explorer Url:`, ExplorerUrl.mainnet().resolverUrl(did));
};

export { createIdentity };