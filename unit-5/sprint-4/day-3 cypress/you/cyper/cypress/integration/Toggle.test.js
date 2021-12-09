describe("test", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/");
    });
    it("togggle", function () {
        cy.get("input").should("exist")
    })
//  it("togggle change", function () {
//    cy.get("input").
//  });
})