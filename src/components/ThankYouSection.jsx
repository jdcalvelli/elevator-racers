import {Paper, Text, Title} from "@mantine/core";

function ThankYouSection() {
    return (
        <Paper shadow={"xl"} p={"md"} style={{height: 500, width: 400}}>
            <Title order={3} mb={20}>Thank you for playing!</Title>

            <Text color={'dimmed'} mb={20}> From the NYU Game Center with love.</Text>

            <Text color={'dimmed'} mb={10}> Designers:</Text>
            <Text color={'dimmed'} mb={5}> Aly Yu</Text>
            <Text color={'dimmed'} mb={5}> David Fang</Text>
            <Text color={'dimmed'} mb={5}> Hoisen Wong</Text>
            <Text color={'dimmed'} mb={20}> JD Calvelli</Text>

            <Text color={'dimmed'}> Please play again soon, perhaps next time you take the elevator!</Text>
        </Paper>
    )
}

export default ThankYouSection;