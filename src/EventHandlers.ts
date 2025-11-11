/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  PaxAccountV1,
  PaxAccountV1_Initialized,
  PaxAccountV1_PaxAccountCreated,
} from "generated";

PaxAccountV1.Initialized.handler(async ({ event, context }) => {
  const entity: PaxAccountV1_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.PaxAccountV1_Initialized.set(entity);
});

PaxAccountV1.PaxAccountCreated.handler(async ({ event, context }) => {
  const entity: PaxAccountV1_PaxAccountCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    paxAccount: event.params.paxAccount,
  };

  context.PaxAccountV1_PaxAccountCreated.set(entity);
});
