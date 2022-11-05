import {Center, Container, Image, MantineProvider, Stack} from '@mantine/core';

import GuessingSection from "./components/GuessingSection.jsx";
import ReportingSection from "./components/ReportingSection.jsx";
import ChartGuessSection from "./components/ChartGuessSection.jsx";
import ChartReportSection from "./components/ChartReportSection.jsx";
import ElevatorLoading from "./components/ElevatorLoading.jsx";

import getData from "./tasks/getData.js";

import './style.css'

import flashImageUrl from './assets/1Flash.png'
import otisImageUrl from './assets/2Otis.png'
import meatballImageUrl from './assets/3Meatball.png'
import adBanner1Url from './assets/Ad Banner 1.jpg'
import adBanner2Url from './assets/Ad Banner 2.jpg'
import adBanner3Url from './assets/Ad Banner 3.jpg'

import {useEffect, useState} from "react";
import ThankYouSection from "./components/ThankYouSection.jsx";

function App() {

    let [data, setData] = useState({isLoaded: false, dataObject: {}});

    let [flowOrder, setFlowOrder] = useState(0)

    let [updateId, setUpdateId] = useState(null)

    useEffect(() => {
        getData(setData);
    },[flowOrder]);

    const randomAd = () => {
        let adIndex = Math.floor(Math.random() * 3)
        switch (adIndex) {
            case 0:
                return adBanner1Url;
            case 1:
                return adBanner2Url;
            case 2:
                return adBanner3Url;
        }
    }

  return (
      <MantineProvider>
          <Stack>

              {/* this is the pictures of the guys*/}
              <Container
                  style={{
                      display: 'flex',
                  }}>
                  <Image src={flashImageUrl}></Image>
                  <Image src={otisImageUrl}></Image>
                  <Image src={meatballImageUrl}></Image>
              </Container>

              {/* this is the center content*/}
              <Center>
                  {flowOrder == 0 ?
                      <GuessingSection
                          setFlowOrder={setFlowOrder}
                          setUpdateId={setUpdateId}
                      /> :
                      null
                  }

                  {flowOrder == 1 ?
                      <ElevatorLoading
                          setFlowOrder={setFlowOrder}
                      /> :
                      null
                  }

                  {flowOrder == 2 ?
                      (data.isLoaded ?
                              <ChartGuessSection
                                  setFlowOrder={setFlowOrder}
                                  loadedData={data.dataObject}
                              /> :
                              null
                      ) :
                      null
                  }

                  {flowOrder == 3 ?
                      <ReportingSection
                          setFlowOrder={setFlowOrder}
                          updateId={updateId}
                      /> :
                      null
                  }

                  {flowOrder == 4 ?
                      (data.isLoaded ?
                              <ChartReportSection
                                  setFlowOrder={setFlowOrder}
                                  loadedData={data.dataObject}
                              /> :
                              null
                      ) :
                      null
                  }

                  {flowOrder == 5 ?
                      <ThankYouSection /> :
                      null
                  }
              </Center>

              {/* this is the ads section*/}

              <Image src={randomAd()}></Image>

          </Stack>
      </MantineProvider>
  )

}

export default App
