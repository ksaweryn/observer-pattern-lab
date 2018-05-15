const Spectator = require("./Spectator");

class Reporter extends Spectator {
  react(scoringTeam) {
    return "Goal by " + scoringTeam;
  }
}

module.exports = Reporter;
