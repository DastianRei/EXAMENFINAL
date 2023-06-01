import cambiar from "./cambio";

describe("Cambiar", () => {
    it("Deberia devolver el cambio", () => {
      expect(cambiar(10,15)).toEqual(5);
    });
  });