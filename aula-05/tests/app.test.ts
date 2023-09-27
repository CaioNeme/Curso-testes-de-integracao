import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });

  it("Fibonnatic sequence", async () => {
    const { status, body } = await api.get("/fibonacci?elements=10");
    expect(status).toBe(200);
    expect(body).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
