# Observer pattern lab 

### Getting started
- Fork and clone repo
- Install dependencies: `npm install`
- cd into project directory
- Run tests: `npm test`

### Tasks 
(Don't forget to do TDD!)
1. Fix failing test in `FootballGame.test.js`
3. Add a Reporter class. A reporter should objectively `respond()` with a 'GOAL BY ${winning team}!'
2. Add Fan class. A fan should have a team that they support (this can be just a string) and they should be able to `respond(scoringTeam)` with a 'yay!' if their team scores, and 'boo!' if another team scores
4. A Fan **is a** Spectator. A Reporter also **is a** Spectator. Create a Spectator class and make fans and spectators extend from Spectator. (Note: a Spectator doesn't really respond to goals because they don't care... they're not fans nor spectators)
5. As with all football games, spectators (i.e. fans and reporters) can arrive late. Create a method (`.subscribe(spectator)`) to add a late spectator to a football game (hint: you may need to change the way the single reporter is currently stored in FootballGame)
5. As with all football games, spectators (i.e. fans and reporters) can leave. Create a method (`.unsubscribe(spectator)`) remove a spectator from a football game
6. Now, all fans and reporters should react when a team scores in a football game. Update `.notifyObservers(scoringTeam)` to make all spectators react

### Summary

Read [this](./summary.md) after completing the lab