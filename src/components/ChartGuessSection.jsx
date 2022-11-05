import {Button, Paper, Stack, Title} from "@mantine/core";

//import chartjs core
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import {Pie} from "react-chartjs-2";

function ChartGuessSection(props) {

    const collateGuesses = (loadedData) => {
        const outputArray = [0, 0, 0];

        loadedData.forEach(item => {
            switch (item.guessedWinner) {
                case "Elevator 1":
                    outputArray[0]++;
                    break;
                case "Elevator 2":
                    outputArray[1]++;
                    break;
                case "Elevator 3":
                    outputArray[2]++;
                    break;
            }
        })

        return outputArray;
    }

    return (
        <Paper shadow={"xl"} p={"md"} style={{height: 500, width: 400}}>
            <Stack>
                <Title order={3} style={{textAlign: 'center'}}>Highest Guessed Winning Elevator</Title>
                <Pie
                    data={{
                        labels: ['The Flash', 'Otis', 'Meatball'],
                        datasets:[{
                            label: 'guesses per elevator',
                            data: collateGuesses(props.loadedData),
                            backgroundColor: [
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                            ]
                        }]
                    }}
                    height={400}
                    width={400}
                />

                <Button
                    onClick={() => {
                        props.setFlowOrder(3)
                    }}>
                    Tell us who actually won!
                </Button>
            </Stack>
        </Paper>
    )
}

export default ChartGuessSection;