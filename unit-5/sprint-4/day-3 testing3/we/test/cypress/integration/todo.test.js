///<reference types="cypress"/>

describe("todo test", function () {
  it("goto todos app", function () {
      cy.visit("http://localhost:3000/");
      
      cy.get("input").should("exist")
      cy.get("button")
  })
})
