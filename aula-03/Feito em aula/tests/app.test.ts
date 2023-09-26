//* suite de testes (teste suits)
//* agrupamento de teste que faz sentido ficarem juntos
describe("teste com contas de matematica", () => {
  it("Should return the sum of two numbers", () => {
    expect(2 + 2).toBe(4); //*matches
  });
  it("Should return the subtraction of two numbers", () => {
    expect(2 - 2).toBe(0); //*matches
  });
});
