describe("Cambio", () => {
  it("Deberia mostrar el cambio ", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(10);
    cy.get("#efectivo").type(15);
    cy.get("#cambiar-button").click();
    cy.get("#resultado-div").should("contain", "5");
  });
});

describe("Mensaje", () => {
  it("Deberia mostrar el mensaje de error", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(" ");
    cy.get("#efectivo").type(" ");
    cy.get("#cambiar-button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Ingrese ambos datos");
    });
  });
});
