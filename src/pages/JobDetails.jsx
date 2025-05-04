import { Button } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { TiPlus } from "react-icons/ti";
import AddJobDetailsModal from "../components/AddJobDetailsModal";
import { useDisclosure } from "@mantine/hooks";

const JobDetails = () => {
  const [opened, { open, close }] = useDisclosure();

  const [count, setCount] = useState(0);

  const prev = useRef();

  useEffect(() => {
    prev.current = count;
  }, [count]);

  return (
    <div className="flex justify-end mr-4 mt-4">
      {opened && <AddJobDetailsModal opened={opened} close={close} />}

      <Button
        type="button"
        variant="filled"
        color="blue"
        onClick={open}
        leftSection={<TiPlus />}
      >
        Add Job
      </Button>

      <Button onClick={() => setCount(count + 1)}>
        <center>lick</center>
      </Button>
      <p>values: {count}</p>
      <p>withRef :{prev.current}</p>
    </div>
  );
};

export default JobDetails;
