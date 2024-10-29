/// <reference types="cypress" />

describe("Verify Login/Logout And Tab functionality", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('[title="Sign in"]').click();
        cy.get("#email").clear().type('brett.jr.meredith06231992@gmail.com');
        cy.get("#password").clear().type("ComputerPassword12#");
        cy.get(".signin-button").click();
    });

    afterEach(() => {
        cy.get("[data-toggle='dropdown']").click();
        cy.contains("Logout").click();
        cy.contains("Forgot Password?");
    });

    it("Login and Click on 'Codeless' link under Automation Section", function() {
        cy.contains('Dashboard');
        cy.get('#tgtestcase').click();
        cy.contains("Lets get you started with codeless automation");
    });

    it("Open The Link 'Real Device Cloud' in New Tab and Back To Parent Page", function() {
        cy.get('[id="realdevice_li"] > a').invoke("removeAttr", "target").click();
        cy.url().should("include", "/devicecloud");
        cy.contains('Device Groups');
        cy.go("back");
        cy.contains("Selenium");
    });
});