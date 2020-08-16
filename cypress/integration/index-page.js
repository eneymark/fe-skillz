describe("Index page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit("/");
    });

    it("should have a logo", () => {
        cy.get(".main").should("have.length", 1);
    });
});