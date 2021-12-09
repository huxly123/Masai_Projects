
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
});
