import { expect } from "chai";

const getRand = () => Math.ceil(Math.random() * 99);
const letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

const getFakeEmail = () => {
  let offset = getRand();
  let limit = offset + 2;

  while(offset <= 0) {
    offset = getRand();
  }

  return letters.slice(offset, limit) + "@test.io";
}

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

  it("Should submit a new event", () => {
    browser.waitForVisible(".loading-container", null, true);

    const fakeUser = getFakeEmail();

    browser.setValue('input[name="first_name"]', fakeUser);
    browser.setValue('input[name="last_name"]', "test");
    browser.setValue('input[name="email"]', fakeUser);

    browser.click('input[name="event_date"]');

    browser.keys("\uE013");
    browser.keys("\uE004");

    browser.keys("\uE013");
    browser.keys("\uE004");

    browser.keys("\uE013");

    browser.click("button");

    browser.waitForVisible(".btn__loading", null, true);

    const text = browser.element(".card:last-child").element("p:first-child").getText();

    expect(text).to.equal(fakeUser + " test");
  })
});
