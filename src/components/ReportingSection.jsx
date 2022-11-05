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
                    report elevator 1
                </Button>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 2")
                        props.setFlowOrder(3)
                    }}>
                    report elevator 2
                </Button>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 3")
                        props.setFlowOrder(3)
                    }}>
                    report elevator 3
                </Button>
            </Stack>
        </Paper>
    )
}

export default ReportingSection;