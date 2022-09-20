import express from "express";
import "express-async-errors";
import prisma from "./lib/prisma/client";

const app = express();

app.get("/manga_facts", async (request, response) => {
   const manga = await prisma.manga.findMany();

   response.json(manga);
});


export default app;