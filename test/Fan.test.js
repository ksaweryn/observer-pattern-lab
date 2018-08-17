const Fan = require("../src/Fan");

describe("Fan", () => {
  it("should react with yay! when own team scores", () => {
    const teamAFan = new Fan("team a");
    expect(teamAFan.respond("team a")).toEqual("yay!");
  });

  it("should react with boo! when other team scores", () => {
    const teamAFan = new Fan("team a");
    expect(teamAFan.respond("team b")).toEqual("boo!");
  });
});
