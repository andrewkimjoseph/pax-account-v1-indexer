import assert from "assert";
import { 
  TestHelpers,
  PaxAccountV1_Initialized
} from "generated";
const { MockDb, PaxAccountV1 } = TestHelpers;

describe("PaxAccountV1 contract Initialized event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for PaxAccountV1 contract Initialized event
  const event = PaxAccountV1.Initialized.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("PaxAccountV1_Initialized is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await PaxAccountV1.Initialized.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualPaxAccountV1Initialized = mockDbUpdated.entities.PaxAccountV1_Initialized.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedPaxAccountV1Initialized: PaxAccountV1_Initialized = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      version: event.params.version,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualPaxAccountV1Initialized, expectedPaxAccountV1Initialized, "Actual PaxAccountV1Initialized should be the same as the expectedPaxAccountV1Initialized");
  });
});
