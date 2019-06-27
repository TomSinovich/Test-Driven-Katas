const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {

  let what = false;

  beforeEach(() => {
    wrap("this is new line you guys i swear", 5).split('\n').forEach(x => {
      if (x.length <= 5) {
        what = true
      }
    })
  })

  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Returns a string ", () => {
    expect(typeof wrap("test", 2)).to.equal("string");
  });
  it("First line is less than or equal to column", () => {
    expect(wrap("this is new line", 8).split("\n")[0].length <= 8).to.equal(
      true
    );
  });
  it("Every line is less than or equal to column", () => {
    expect(what)
      .to.equal(
      true
    )
  })
});
