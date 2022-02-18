import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  name: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const { name } = req.body as RequestBody;

    try {
      await prisma.todo.create({ data: { name } });
      res.status(200).send({ message: "todo added successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    } finally {
      prisma.$disconnect();
    }
  }
}
