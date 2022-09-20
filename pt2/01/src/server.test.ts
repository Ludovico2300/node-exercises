import supertest from "supertest";
import { prismaMock } from "./lib/prisma/client.mock";

import app from "./app";

const request = supertest(app);


test("GET /manga_facts", async () => {
  const manga = [
    {
      id: 1,
      name: "One Piece",
      description: null,
      volumes: 103,
      author: "Eiichiro Oda",
      createdAt: "2022-09-20T16:22:15.440Z",
      updatedAt: "2022-09-20T16:16:33.293Z"
    },
    {
      id: 2,
      name: "Chainsaw Man",
      description: null,
      volumes: 11,
      author: "Tatsuki Fujimoto",
      createdAt: "2022-09-20T16:22:15.441Z",
      updatedAt: "2022-09-20T16:22:24.015Z"
    }
  ]
  //@ts-ignore
  prismaMock.manga.findMany.mockResolvedValue(manga);

  const response = await request
    .get("/manga_facts")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual(manga);

});