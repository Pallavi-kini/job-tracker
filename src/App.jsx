// import { useState } from 'react'
import {  MantineProvider } from "@mantine/core";
import JobDetails from "./pages/JobDetails";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <JobDetails/>
    </MantineProvider>
  );
}

export default App;
