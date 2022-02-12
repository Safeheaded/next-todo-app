import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../pages/test.module.css";

interface Props {
  name: string;
  clickHandler: (id: number) => void;
  id: number;
}

const Display: NextPage<Props> = ({ name, clickHandler, id }) => {
  return (
    <div onClick={() => clickHandler(id)} className={styles.container}>
      {name}
    </div>
  );
};

export default Display;
