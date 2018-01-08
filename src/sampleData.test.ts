import { dummy } from "./sampleData";

describe("dummy", () => {
  it("should add two number", () => {
    expect(dummy(1, 2)).toEqual(3);
  });
});
