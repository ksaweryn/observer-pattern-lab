const Spectator = require("./Spectator");

class Fan extends Spectator {
  constructor(myTeam) {
    super();
    this.myTeam = myTeam;
  }
  react(scoringTeam) {
    if (scoringTeam === this.myTeam) return "yay!";
    return "boo!";
  }
}

module.exports = Fan;
