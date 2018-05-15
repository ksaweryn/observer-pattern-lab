const FootballGame = require("../src/FootballGame");
const Fan = require("../src/Fan");
const Reporter = require("../src/Reporter");

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

  it("reporter should react to goal by Team B when Team A stores", () => {
    const SCORING_TEAM = "Team B";
    footballGame.teamScored(SCORING_TEAM);
    expect(reporter.react).toBeCalledWith(SCORING_TEAM);
  });

  it("should add spectators", () => {
    const fan1 = new Fan("team A");
    const numberOfSpectators = footballGame.spectators.length;

    expect(footballGame.spectators).toHaveLength(numberOfSpectators);
    footballGame.addSpectators(fan1);
    expect(footballGame.spectators).toHaveLength(numberOfSpectators + 1);
  });
});
