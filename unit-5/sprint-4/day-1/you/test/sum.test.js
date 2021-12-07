const summ=require("./sum")

test("sum of n positive", () => {
    expect(summ(1,2,3,4,5)).toBe(15)
})

test("sum of n negative", () => {
  expect(summ(-1, -2, -3, -4, -5)).toBe(-15);
});

test("sum of n positive and negative", () => {
  expect(summ(-1, 2, 3, 4, -5)).toBe(3);
});

test("sum of nnum floating point", () => {
  expect(summ(1.5, 2.5, 3.5, 4.5, 5.5)).toBe(17.5);
});