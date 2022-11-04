import {Paper} from "@mantine/core";

//import chartjs core
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import {Bar} from "react-chartjs-2";

function ChartGuessSection() {

    return (
        <Paper shadow={"xl"} p={"md"}>
            <Bar
                data={{
                    labels: ['elevator 1', 'elevator 2', 'elevator 3'],
                    datasets:[{
                        label: 'guesses per elevator',
                        data: [3, 4, 1],
                    }]
                }}
                height={400}
                width={400}/>
        </Paper>
    )
}

export default ChartGuessSection;