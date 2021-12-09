///<reference types="cypress"/>

describe("todo test", function () {

    beforeEach(function () {
    cy.visit("http://localhost:3000/")
})

  it("goto todos app", function () {
      cy.visit("http://localhost:3000/");
      
      cy.get("input").should("exist")
      cy.get("button").should("contain","")
  })
    it("should type in input box", function () {
        cy.get("input").type("Learn React").should("have.value","Learn React")
    })
    

   it("todo should get added", function () {
     cy.get("input").type("Learn React").should("have.value", "Learn React");
   
       cy.get("button").click()
       
    //    cy.visit("/users")
   
   });
    
    
    it("should add todo to list", function () {
         cy.get("input")
           .type("Learn React")
           .should("have.value", "Learn React");

        cy.get("button").click();

        cy.get("input").clear()

         cy.get("input")
           .type("Learn Vue")
           .should("have.value", "Learn Vue");

         cy.get("button").click();

         cy.get("input").clear();
        
        cy.get(".todoitems").should("have.length",2)
    })

})
