import "./App.css";
import { Box, Heading } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar";
import { InputBox } from "./Components/InputBox";
import { JobBox } from "./Components/JobBox";
import { Footer } from "./Components/Footer";
import {jobsData} from './data/data';
function App() {
 

  return (
    <div className="App">
      <Navbar />
      <InputBox />
      <Box bg="#edf2f7" pb="80px">
        <Box pt="55px" w="640px" m="auto">
          <Heading>
            <span style={{ color: "#6b46c1" }}> Recent </span> Jobs
          </Heading>
        </Box>
        <Box maxW="665px" m="auto">
          {jobsData.map((data) => (
            <JobBox key={data.id} {...data} />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
