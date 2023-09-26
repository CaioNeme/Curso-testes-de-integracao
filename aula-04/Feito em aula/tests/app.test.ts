import app from "../src/server";
import supertest from "supertest";

const server = supertest(app);

describe("api", () => {
  it("/health", async () => {
    const result = await server.get("/health");

    console.log(result);

    expect(result.status).toBe(200);
  });
});
