import {Center, MantineProvider, Stack} from '@mantine/core';

import GuessingSection from "./components/GuessingSection.jsx";
import ReportingSection from "./components/ReportingSection.jsx";
import ChartGuessSection from "./components/ChartGuessSection.jsx";
import ChartReportSection from "./components/ChartReportSection.jsx";

function App() {

  return (
      <MantineProvider>
          <Center>
              <Stack>
                  <GuessingSection />
                  <ChartGuessSection />
                  <ReportingSection />
                  <ChartReportSection />
              </Stack>
          </Center>
      </MantineProvider>
  )

}

export default App
