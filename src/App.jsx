import {Center, Container, MantineProvider} from '@mantine/core';

import GuessingSection from "./components/GuessingSection.jsx";
import ReportingSection from "./components/ReportingSection.jsx";
import ChartGuessSection from "./components/ChartGuessSection.jsx";
import ChartReportSection from "./components/ChartReportSection.jsx";

import getData from "./tasks/getData.js";

import './style.css'

import {useEffect, useState} from "react";

function App() {

    let [data, setData] = useState({isLoaded: false, dataObject: {}});

    let [flowOrder, setFlowOrder] = useState(0)

    let [updateId, setUpdateId] = useState(null)

    useEffect(() => {
        getData(setData);
    },);

  return (
      <MantineProvider>
          <Container
              style={{
                  height: '95vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
          }}>
              <Center>
                  {flowOrder == 0 ?
                      <GuessingSection
                          setFlowOrder={setFlowOrder}
                          setUpdateId={setUpdateId}

                      /> :
                      null
                  }

                  {flowOrder == 1 ?
                      (data.isLoaded ?
                              <ChartGuessSection
                                  setFlowOrder={setFlowOrder}
                                  loadedData={data.dataObject}
                              /> :
                              null
                      ) :
                      null
                  }

                  {flowOrder == 2 ?
                      <ReportingSection
                          setFlowOrder={setFlowOrder}
                          updateId={updateId}
                      /> :
                      null
                  }

                  {flowOrder == 3 ?
                      (data.isLoaded ?
                              <ChartReportSection
                                  setFlowOrder={setFlowOrder}
                                  loadedData={data.dataObject}
                              /> :
                              null
                      ) :
                      null
                  }
              </Center>
          </Container>
      </MantineProvider>
  )

}

export default App
