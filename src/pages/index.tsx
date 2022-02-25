import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { PrismaClient, Todo } from "@prisma/client";
import { AddTodo } from "components/addTodo";
import type { NextPage } from "next";

export interface TodosProps {
  todos: Todo[];
}

const Home: NextPage<TodosProps> = (props) => {

  return (
    <Flex
      width="100%"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <AddTodo />
      </Box>
    </Flex>
  );
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
