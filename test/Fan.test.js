const Fan = require("../src/Fan");
describe("Fan", () => {
  it("should react with yay! when fan's team scores", () => {
    const SOME_TEAM = "team A";
    const fan = new Fan(SOME_TEAM);
    expect(fan.react(SOME_TEAM)).toEqual("yay!");
  });

  it("should react with boo! when other team scores", () => {
    const fan = new Fan("team A");
    expect(fan.react("team B")).toEqual("boo!");
  });
});
