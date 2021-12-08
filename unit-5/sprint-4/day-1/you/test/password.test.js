
const password=require("./password")
test("password",()=> {
    expect(password("1A3456")).toBe("Not have small letters");
    expect(password("1A3456a")).toBe("Not have special charaters");
    expect(password("!Aafdvfe")).toBe("Not having numbers");
    expect(password("!Aa")).toBe("Less than 6 characters");
     expect(password("!Aafdvfe2")).toBe("Accepted");
})