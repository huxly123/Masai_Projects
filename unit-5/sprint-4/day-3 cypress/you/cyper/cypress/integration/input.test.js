
describe("test", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/");
    });
    xit("auto focus", function () {
        cy.get("input").should("exist")
    });
    xit("type", function () {
        cy.get(".inp").type("Learn").should("have.value", "Learn");
    });
    
    it("button", function () {
        cy.get("button").first().should("exist")
    })
    
    it("del", function () {
        cy.request("DELETE", "https://reqres.in/api/users/2").then((data) => {
            cy.log(data);

            expect(data.status).to.eq(204);
            
        })
    })
})
