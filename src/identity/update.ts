import { AccountBuilder, ExplorerUrl, MethodContent, MethodRelationship, init } from "@iota/identity-wasm/web";

const updateIdentity = async () => {
  await init();

  let builder = new AccountBuilder();
  let account = await builder.createIdentity();

  await account.createMethod({
    content: MethodContent.GenerateEd25519(),
    fragment: "gloompi-fragment",
  });

  // Associate the newly created method with additional verification relationships.
  await account.attachMethodRelationships({
    fragment: "gloompi-fragment",
    relationships: [
      MethodRelationship.CapabilityDelegation,
      MethodRelationship.CapabilityInvocation,
    ],
  });

  // Add a new service to the identity.
  await account.createService({
    fragment: "my-service-1",
    type: "super-cool-service",
    endpoint: "https://super-project.com",
  });

  // await account.deleteMethod({ fragment: "gloompi-fragment" });

  // Retrieve the DID of the newly created identity.
  let did = account.did();

  // Print the Explorer URL for the DID.
  console.log(`Explorer Url:`, ExplorerUrl.mainnet().resolverUrl(did));
};

export { updateIdentity };
