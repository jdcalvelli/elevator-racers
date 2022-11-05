import {Button, Paper, Stack} from "@mantine/core";

import setActualData from "../tasks/setActualData.js";

function ReportingSection(props) {
    return (
        <Paper shadow={"xl"} p={"md"} style={{height: 500, width: 400}}>
            <Stack>
                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 1")
                        props.setFlowOrder(3)
                    }}>
                    Report The Flash as the winner! (farthest left)
                </Button>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 2")
                        props.setFlowOrder(3)
                    }}>
                    Report Otis as the winner! (in the center)
                </Button>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 3")
                        props.setFlowOrder(3)
                    }}>
                    Report Meatball as the winner! (farthest right)
                </Button>
            </Stack>
        </Paper>
    )
}

export default ReportingSection;