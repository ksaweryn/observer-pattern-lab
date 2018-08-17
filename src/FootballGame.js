class FootballGame {
  constructor(reporter) {
    this.reporter = reporter;
  }

  notifyObservers(scoringTeam) {
    // implementation here
    this.reporter.respond("Team A");
  }
}

module.exports = FootballGame;
