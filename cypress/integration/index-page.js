import navData from '../../data/navbar.json';

describe("Index page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit("/");
    });

    it("should have a logo", () => {
        cy.get("[data-test=logo]").should("have.length", 1);
    });

    it('should have a navbar', ()=>{
        cy.get("[data-test=navbar]").should("have.length", 1);
    });

    it('should open submenu items', ()=>{
       navData.navItems.map(navItem=>{
           if(navItem.subMenu){
               cy.get(`[data-test='item:${navItem.title}']`).click()
                   .find("[data-test=submenu]").should("have.length", navItem.subMenu.length);
           }
       });
    });
});