const FootballGame = require("../src/FootballGame");

describe("FootballGame", () => {
  let reporter;
  let footballGame;

  beforeEach(() => {
    reporter = { respond: jest.fn() };
    footballGame = new FootballGame(reporter);
  });

  it("reporter should react to goal by Team A when Team A scores", () => {
    const SCORING_TEAM = "Team A";
    footballGame.notifyObservers(SCORING_TEAM);
    expect(reporter.respond).toBeCalledWith(SCORING_TEAM);
  });
});
