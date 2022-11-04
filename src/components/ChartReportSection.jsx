import {Paper} from "@mantine/core";

//import chartjs core
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import {Pie} from "react-chartjs-2";

function ChartReportSection(props) {

    const collateGuesses = (loadedData) => {
        const outputArray = [0, 0, 0];

        loadedData.forEach(item => {
            switch (item.actualWinner) {
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
        <Paper shadow={"xl"} p={"md"}>
            <Pie
                data={{
                    labels: ['elevator 1', 'elevator 2', 'elevator 3'],
                    datasets:[{
                        label: 'actual report per elevator',
                        data: collateGuesses(props.loadedData),
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ]
                    }]
                }}
                height={400}
                width={400}/>
        </Paper>
    )
}

export default ChartReportSection;