const add = require("../script");

describe("String Calculator", () => {
  // test("if we call the function without args", () => {
  //   expect(add()).toBe(0);
  // });

  test("if we pass only one number", () => {
    expect(add(3)).toBe(3);
  });

  test("if we pass only two numbers", () => {
    expect(add(3, 6)).toBe(9);
  });

  test("Allow the Add method to handle an unknown amount of numbers", () => {
    expect(add(1, 4, 3, 5)).toBe(13);
  });

  test("if we pass a negative number, it should throw an exception", () => {
    expect(() => add(1, 3, 4, 9, -3)).toThrow("negatives not allowed: -3");
    expect(() => add(4, 4, -8, 4, 4, 9, -4)).toThrow("negatives not allowed: -8 -4");
  });

  test("Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2", () => {
    expect(add(2, 1001)).toBe(2);
  });
});
