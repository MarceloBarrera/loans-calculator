/// <reference types="Cypress" />

describe("bmi questionnaire", () => {
  it("open app", () => {
    cy.visit("/");
  });

  it("Components are present", () => {
    cy.contains("Your loan");
    cy.contains("Amount requested:");
    cy.contains("Revolving Credit Facility");
    cy.contains("Business loan");
  });

  it("Default calculations are present", () => {
    cy.contains("10750");
    cy.contains("11750");
  });

  it("Business loan show error message when amount is 1000 ", () => {
    cy.get("p").should("not.exist");
    cy.get("#amountRequested").clear().type("1000");
    cy.contains("Amount requested: 1000 cannot be less than: 10000");
    cy.get("p").should("be.visible");
  });
});
export {};
