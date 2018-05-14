const Reporter = require("../src/Reporter");

describe("Reporter", () => {
  it("should include the scoring team when reporting goal", () => {
    const reporter = new Reporter();
    const SCORING_TEAM = "some team";
    expect(reporter.react(SCORING_TEAM)).toEqual(`Goal by ${SCORING_TEAM}`);
  });
});
