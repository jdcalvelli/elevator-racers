import axios from "axios";

async function getData(setData) {

    try {
        const response = await axios.request(
            {
                method: "get",
                url: 'https://noco.apps.jdcalvelli.me/api/v1/db/data/noco/p_52z0ohww6ve3ja/dev-table/views/dev-table',
                headers: {
                }
            })

        setData({isLoaded: true, dataObject: response.data.list})
        console.log(response.data.list)
    }
    catch (error) {
        console.error(error);
    }
}

export default getData;