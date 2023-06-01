describe("Cambio", () => {
    it("Deberia mostrar el cambio ", () => {
      cy.visit("/");
      cy.get("#monto-venta").type(10);
      cy.get("#efectivo").type(15);
      cy.get("#cambiar-button").click();
      cy.get("#resultado-div").should("contain", "5");
    });
  });
  