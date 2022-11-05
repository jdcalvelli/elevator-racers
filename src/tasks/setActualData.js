import axios from "axios";

async function setActualData(updateId, actualWinner) {
    try {
        const response = await axios.request(
            {
                method: "patch",
                url: `https://noco.apps.jdcalvelli.me/api/v1/db/data/noco/p_52z0ohww6ve3ja/dev-table/views/dev-table/${updateId}`,
                headers: {
                },
                data: {
                    actualWinner: actualWinner,
                },
            })
    }
    catch (error) {
        console.error(error);
    }
}

export default setActualData;