import {Button, Paper, Stack} from "@mantine/core";


function GuessingSection() {
    return (
        <Paper shadow={"xl"} p={"md"}>
            <Stack>
                <Button> guess elevator 1 </Button>
                <Button> guess elevator 2 </Button>
                <Button> guess elevator 3 </Button>
            </Stack>
        </Paper>
    )
}

export default GuessingSection;