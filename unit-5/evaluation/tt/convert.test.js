const convert = require("./convert");

test("b to kb", function () {
    expect((convert(1000, "kb"))).toBe("1 kb")
    expect(convert(7000, "kb")).toBe("7 kb");
    expect(convert(8000, "kb")).toBe("8 kb");
    expect(convert(2000, "kb")).toBe("2 kb");
    expect(convert(43000, "kb")).toBe("43 kb");
    expect(convert(77000, "kb")).toBe("77 kb");

})


test("b to mb", function () {
    expect(convert(1000000, "mb")).toBe("1 mb")
    expect(convert(22000000, "mb")).toBe("22 mb");
     expect(convert(134000000, "mb")).toBe("134 mb");

    expect(convert(432000000, "mb")).toBe("432 mb");
     expect(convert(131000000, "mb")).toBe("131 mb");
})