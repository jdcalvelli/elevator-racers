import {Button, Paper, Stack, Text, Title} from "@mantine/core";

import setGuessData from "../tasks/setGuessData.js";

function GuessingSection(props) {
    return (
        <Paper shadow={"xl"} p={"md"} style={{height: 500, width: 400}}>
            <Stack>
                <Title order={3} style={{textAlign: 'center'}}>The First Annual Tandon Cup</Title>

                <Text color={'dimmed'}>
                    These elevators have come from around the world to race in the First Annual Tandon Cup.
                </Text>

                <Text color={'dimmed'}>
                    Once you've pressed the elevator button to go up or down, the race begins!
                </Text>

                <Text color={'dimmed'}>
                    Place your bet on which of these incredible competitors you believe will be the victor in
                    this race. Once you have, you'll see on whom other spectators have been placing their bets
                    across individual events!
                </Text>

                <Button
                    onClick={async () => {
                        let updateId = await setGuessData('Elevator 1')
                        console.log(updateId)
                        props.setUpdateId(updateId)
                        props.setFlowOrder(1)
                    }}>
                    Vote for The Flash! (farthest left)
                </Button>

                <Button
                    onClick={async () => {
                        let updateId = await setGuessData('Elevator 2')
                        props.setUpdateId(updateId)
                        props.setFlowOrder(1)
                    }}>
                    Vote for Otis! (in the center)
                </Button>

                <Button
                    onClick={async () => {
                        let updateId = await setGuessData('Elevator 3')
                        props.setUpdateId(updateId)
                        props.setFlowOrder(1)
                    }}>
                    Vote for Meatball! (farthest right)
                </Button>
            </Stack>
        </Paper>
    )
}

export default GuessingSection;