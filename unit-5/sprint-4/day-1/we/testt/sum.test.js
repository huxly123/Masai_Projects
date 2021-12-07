const { expect } = require("@jest/globals")

const {sum} = require("./sum")
const {sub}=require("./sum")

test("Addition", () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(2,4)).toBe(6)
})

test("add of negative", () => {
    expect(sum(-3,-6)).toBe(-9)
})

test("add of negative and positive", () => {
  expect(sum(-3, 6)).toBe(3);
});

describe("add", function () {
    test("add of negative and positive", () => {
      expect(sum(-3, 6)).toBe(3);
    });
})

describe("difference", function () {
  test("add of negative and positive", () => {
      expect(sub(-3, 6)).toBe(-9);
  });
});