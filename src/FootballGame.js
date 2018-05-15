class FootballGame {
  constructor(reporter) {
    this.reporter = reporter;
    this.spectators = [reporter];
  }

  teamScored(scoringTeam) {
    this.spectators.forEach(spectator => spectator.react(scoringTeam));
  }

  addSpectators(spectator) {
    this.spectators.push(spectator);
  }
}

module.exports = FootballGame;
