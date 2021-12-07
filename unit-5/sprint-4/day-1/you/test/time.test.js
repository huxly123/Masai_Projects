const timee = require("./time")

test("seconds",()=> {
    expect(timee(5200)).toBe("5 seconds");
    expect(timee(60000)).toBe("1 minutes 0 seconds");
    expect(timee(180000)).toBe("3 minutes 0 seconds");
    expect(timee(200000)).toBe("3 minutes 20 seconds");
})