import { Button } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import type { NextPage } from "next";

export interface Todo {
  name: string;
  id: number;
  finished: boolean;
  createdAt: Date;
}

export interface TodosProps {
  todos: Todo[];
}

const Home: NextPage<TodosProps> = (props) => {

  return <Button bg="alert">Test</Button>
};

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const todos = await prisma.todo.findMany();
  prisma.$disconnect();
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}

export default Home;
