import {Button, Paper, Stack} from "@mantine/core";


function ReportingSection() {
    return (
        <Paper shadow={"xl"} p={"md"}>
            <Stack>
                <Button> report elevator 1 </Button>
                <Button> report elevator 2 </Button>
                <Button> report elevator 3 </Button>
            </Stack>
        </Paper>
    )
}

export default ReportingSection;