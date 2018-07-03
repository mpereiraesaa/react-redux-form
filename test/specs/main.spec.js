import { expect } from "chai";

describe("Main test", () => {
  beforeEach(() => {
    browser.url("/")

    browser.waitForText(".header");
  });

  it("Should have the title correctly written", () => {
    const title = browser.getTitle();

    expect(title).to.equal("Basic Setup");
  });

  it("Should have the correct header title", () => {
    const title = browser.getText("h1");
    expect(title).to.equal("Welcome to the Form");
  });
});
