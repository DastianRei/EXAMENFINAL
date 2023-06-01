import {cambiar, devolverCorteCambio} from "./cambio";
describe("Cambiar", () => {
    it("Deberia devolver el cambio", () => {
      expect(cambiar(10,15)).toEqual(5);
    });
  });
describe("Corte Monedas", () => {
    it("Deberia devolver el cambio en corte", () => {
      expect(devolverCorteCambio(0,0)).toEqual([0]);
    });
    it("Deberia devolver el cambio en corte", () => {
        expect(devolverCorteCambio(30,48)).toEqual([18]);
      });
      it("Deberia devolver el cambio en corte de monedas", () => {
        expect(devolverCorteCambio(30,49)).toEqual([5,5,5,2,2]);
      });
  });