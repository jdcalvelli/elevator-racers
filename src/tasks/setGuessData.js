import axios from "axios";

async function setGuessData(guessedWinner) {
    try {
        const response = await axios.request(
            {
                method: "post",
                url: 'https://noco.apps.jdcalvelli.me/api/v1/db/data/noco/p_52z0ohww6ve3ja/dev-table/views/dev-table',
                headers: {
                },
                data: {
                    guessedWinner: guessedWinner,
                },
            })

        return response.data.Id
    }
    catch (error) {
        console.error(error);
    }
}

export default setGuessData;