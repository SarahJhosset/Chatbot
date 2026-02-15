import { saludar, saludarConNombre } from "./bot.js";

describe("Bot", () => {
  describe("saludar", () => {
    it("deberia retornar Hola", () => {
      expect(saludar()).toEqual("Hola");
    });
  });

  describe("saludarConNombre", () => {
    it("deberia saludar a un hombre adulto con Sr.", () => {
      const resultado = saludarConNombre("Pablo", "masculino", "25");
      expect(resultado).toContain("Sr. Pablo");
    });

    it("deberia saludar a un joven con joven", () => {
      const resultado = saludarConNombre("Pablo", "masculino", "15");
      expect(resultado).toContain("joven Pablo");
    });

    it("deberia saludar a una mujer adulta con Sra.", () => {
      const resultado = saludarConNombre("María", "femenino", "30");
      expect(resultado).toContain("Sra. María");
    });

    it("deberia saludar a una señorita menor de 18", () => {
      const resultado = saludarConNombre("Alejandra", "femenino", "16");
      expect(resultado).toContain("señorita Alejandra");
    });

    it("deberia saludar sin tratamiento si no hay genero", () => {
      const resultado = saludarConNombre("Alex", "", "25");
      expect(resultado).toContain("Alex");
      expect(resultado).not.toContain("Sr.");
      expect(resultado).not.toContain("Sra.");
    });

    it("deberia saludar sin tratamiento si el genero es otro", () => {
      const resultado = saludarConNombre("Sam", "otro", "20");
      expect(resultado).toContain("Sam");
      expect(resultado).not.toContain("Sr.");
      expect(resultado).not.toContain("Sra.");
    });
  });
});