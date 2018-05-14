# Observer pattern lab 

### Getting started
- Fork and clone repo
- Install dependencies: `yarn install`
- cd into project directory
- Run tests: `yarn test`

### Tasks
- Fix failing test in `FootballGame.test.js`
- Add Fan class. A fan should have a team that they support (this can be just a string) and they should be able to `react()` with a 'yay!' if their team scores, and 'boo!' if another team scores
- A Fan **is a** Spectator. A Report also **is a** Spectator. Create a Spectator class and make fans 
- As with all football games, spectators (i.e. fans and reporters) can arrive late. Create a method to add a late spectator to a football game
- Now, fans and reporters should react when a team scores in a football game. Update `.teamScored()` to make all spectators react
