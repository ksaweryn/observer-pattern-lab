class Fan {
  constructor(team) {
    this.team = team;
  }

  respond(scoringTeam) {
    if (scoringTeam === this.team) return "yay!";
    return "boo!";
  }
}

module.exports = Fan;
