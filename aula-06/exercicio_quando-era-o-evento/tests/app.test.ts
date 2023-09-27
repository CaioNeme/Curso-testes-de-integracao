import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("GET /health", async () => {
    const { status } = await api.get("/health");
    expect(status).toBe(200);
  });

  it("GET /event", async () => {
    const { status, body } = await api.get("/event");
    expect(status).toBe(200);
    expect(body).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String),
    });
  });
});
