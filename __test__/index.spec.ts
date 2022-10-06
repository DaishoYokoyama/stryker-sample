import request from "supertest";

import { app } from "@/server/app";

describe("API Test", () => {
  it("Hello API 正常系", async () => {
    const name = "yokoyama";

    const res = await request(app).get(`/hello?name=${name}`);
    expect(res.status).toBe(200);
    expect(res.text).toBe(`Hello ${name}!`);
  });

  it("Hello API 異常系 (Queryなし)", async () => {
    const res = await request(app).get("/hello");
    expect(res.status).toBe(400);
  });
});
