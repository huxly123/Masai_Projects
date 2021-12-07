const { expect } = require("@jest/globals")
const fac = require("./fact")

test("factorial", () => {
    expect(fac(3)).toBe(6)
})