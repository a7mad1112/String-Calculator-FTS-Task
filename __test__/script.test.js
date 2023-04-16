const add = require("../script");

describe("String Calculator", () => {
  test("if we pass an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("if we pass only one number", () => {
    expect(add("3")).toBe(3);
  });

  test("if we pass only two numbers", () => {
    expect(add("3,6")).toBe(9);
  });

  test("if number of numbers greater than two , return the sum of first two", () => {
    expect(add("1,4,3,5")).toBe(5);
  });
});
