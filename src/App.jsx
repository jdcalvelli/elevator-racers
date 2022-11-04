import {Center, MantineProvider, Stack} from '@mantine/core';

import GuessingSection from "./components/GuessingSection.jsx";
import ReportingSection from "./components/ReportingSection.jsx";
import ChartGuessSection from "./components/ChartGuessSection.jsx";
import ChartReportSection from "./components/ChartReportSection.jsx";

import {useEffect, useState} from "react";
import getData from "./tasks/getData.js";

function App() {

    let [data, setData] = useState({isLoaded: false, dataObject: {}});

    useEffect(() => {
        getData(setData);
    }, []);

  return (
      <MantineProvider>
          <Center>
              <Stack>
                  <GuessingSection />
                  {data.isLoaded ?
                      <ChartGuessSection loadedData={data.dataObject}/> :
                      null
                  }
                  <ReportingSection />
                  {data.isLoaded ?
                      <ChartReportSection loadedData={data.dataObject}/> :
                      null
                  }

              </Stack>
          </Center>
      </MantineProvider>
  )

}

export default App
