import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { FormEvent } from "react";

interface FormElements extends HTMLFormControlsCollection {
  todoName: HTMLInputElement;
}

interface TodoFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const AddTodo: NextPage = () => {
  const addTodo = async (event: FormEvent<TodoFormElement>) => {
    const form = event.currentTarget;
    const input = form.elements.todoName.value;
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        body: JSON.stringify({ name: input }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={addTodo}>
      <InputGroup size="md">
        <Input
          name="todoName"
          width="20rem"
          type="text"
          placeholder="Todo's name"
        />
        <InputRightElement width="5.5rem">
          <Button type="submit">Add ToDo</Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};
