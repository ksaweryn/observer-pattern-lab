class FootballGame {
  constructor(reporter) {
    this.reporter = reporter;
  }

  teamScored(scoringTeam) {
    // implementation here
    this.reporter.react("Team A");
  }
}

module.exports = FootballGame;
