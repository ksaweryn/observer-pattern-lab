const FootballGame = require("../src/FootballGame");

describe("FootballGame", () => {
  let reporter;
  let footballGame;

  beforeEach(() => {
    reporter = { react: jest.fn() };
    footballGame = new FootballGame(reporter);
  });

  it("reporter should react to goal by Team A when Team A stores", () => {
    const SCORING_TEAM = "Team A";
    footballGame.teamScored(SCORING_TEAM);
    expect(reporter.react).toBeCalledWith(SCORING_TEAM);
  });

  it.skip("reporter should react to goal by Team B when Team A stores", () => {
    const SCORING_TEAM = "Team B";
    footballGame.teamScored(SCORING_TEAM);
    expect(reporter.react).toBeCalledWith(SCORING_TEAM);
  });
});
