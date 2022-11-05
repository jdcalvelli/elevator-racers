import {Button, Paper, Stack} from "@mantine/core";

import setGuessData from "../tasks/setGuessData.js";

function GuessingSection(props) {
    return (
        <Paper shadow={"xl"} p={"md"} style={{height: 500, width: 400}}>
            <Stack>
                <Button
                    onClick={async () => {
                        let updateId = await setGuessData('Elevator 1')
                        console.log(updateId)
                        props.setUpdateId(updateId)
                        props.setFlowOrder(1)
                    }}>
                    guess elevator 1
                </Button>

                <Button
                    onClick={async () => {
                        let updateId = await setGuessData('Elevator 2')
                        props.setUpdateId(updateId)
                        props.setFlowOrder(1)
                    }}>
                    guess elevator 2
                </Button>

                <Button
                    onClick={async () => {
                        let updateId = await setGuessData('Elevator 3')
                        props.setUpdateId(updateId)
                        props.setFlowOrder(1)
                    }}>
                    guess elevator 3
                </Button>
            </Stack>
        </Paper>
    )
}

export default GuessingSection;