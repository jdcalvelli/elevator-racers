import {Button, Paper, Stack, Text, Title} from "@mantine/core";

import setActualData from "../tasks/setActualData.js";

function ReportingSection(props) {
    return (
        <Paper shadow={"xl"} p={"md"} style={{height: 500, width: 400}}>
            <Stack>

                <Title order={3} style={{textAlign: 'center'}}>What were the results?</Title>

                <Text color={'dimmed'}>
                    Was it The Flash, the home grown Brooklyn legend? All she wants is to take back the crown for her
                    community!
                </Text>

                <Text color={'dimmed'}>
                    Was it Otis, the visitor from the countryside? He dusted off his pulleys after his retirement
                    just for this race!
                </Text>

                <Text color={'dimmed'}>
                    Was it Meatball, the international sensation from Italy? They've come to prove that the rest of
                    the world has what it takes to race in the US!
                </Text>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 1")
                        props.setFlowOrder(4)
                    }}>
                    Report The Flash as the winner! (farthest left)
                </Button>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 2")
                        props.setFlowOrder(4)
                    }}>
                    Report Otis as the winner! (in the center)
                </Button>

                <Button
                    onClick={() => {
                        setActualData(props.updateId, "Elevator 3")
                        props.setFlowOrder(4)
                    }}>
                    Report Meatball as the winner! (farthest right)
                </Button>
            </Stack>
        </Paper>
    )
}

export default ReportingSection;