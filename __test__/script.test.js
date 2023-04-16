const add = require("../script");

describe("String Calculator", () => {
  test("if we call the function without args", () => {
    expect(add()).toBe(0);
  });

  test("if we pass only one number", () => {
    expect(add(3)).toBe(3);
  });

  test("if we pass only two numbers", () => {
    expect(add(3, 6)).toBe(9);
  });

  test("Allow the Add method to handle an unknown amount of numbers", () => {
    expect(add(1, 4, 3, 5)).toBe(13);
  });
});
