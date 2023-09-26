import calculator from "calculator";

describe("teste com contas de matematica", () => {
  it("Should return the sum of two numbers", () => {
    expect(calculator.sum(2, 2)).toBe(4);
  });
  it("Should return the subtraction of two numbers", () => {
    expect(calculator.sub(2, 2)).toBe(0);
  });
  it("Should return the multiplication of two numbers", () => {
    expect(calculator.mul(2, 2)).toBe(4);
  });
  it("Should return the division of two numbers", () => {
    expect(calculator.div(2, 2)).toBe(1);
  });
});
