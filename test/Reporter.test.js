const Reporter = require("../src/Reporter");

describe("Reporter", () => {
  it("should include the scoring team when reporting goal", () => {
    const reporter = new Reporter();
    const SCORING_TEAM = "some team";
    expect(reporter.respond(SCORING_TEAM)).toEqual(`GOAL BY ${SCORING_TEAM}!`);
  });
});
