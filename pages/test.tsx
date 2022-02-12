import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import Display from "../components/display";

const dataa = [
  { id: 0, name: "Patryk królik" },
  { id: 1, name: "Kamil ślimak" },
];

const Test: NextPage = () => {
  const [data, setData] = useState(dataa);

  const clickHandler = (id: number) => {
    setData((state) => {
      const index = state.findIndex((element) => element.id === id);
      const newState = [...state];
      newState[index].name = "Jacek";
      return newState;
    });
  };

  return (
    <>
      {data.map(({ name, id }) => (
        <Display key={id} clickHandler={clickHandler} name={name} id={id} />
      ))}
    </>
  );
};

export default Test;
